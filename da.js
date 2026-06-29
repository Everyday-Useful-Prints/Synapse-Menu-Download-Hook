// --- Config & Metadata ---
const version = "1.0.0"
const menuName = "Synapse Menu"

// --- Colors ---
let bgColor = [0.12, 0.03, 0.20, 0.95]
let textColor = [1.0, 1.0, 1.0, 1.0]
let buttonColor = [0.30, 0.12, 0.48, 0.95]
let buttonPressedColor = [0.50, 0.25, 0.72, 1.0]
let borderColor = [0.60, 0.25, 0.80, 1.0]
const gradientColors = [
  [0.10, 0.02, 0.18, 0.95],
  [0.14, 0.04, 0.24, 0.95],
  [0.18, 0.06, 0.30, 0.95],
  [0.22, 0.08, 0.36, 0.95],
  [0.26, 0.10, 0.42, 0.95]
]

// --- Menu State ---
let menu = null
let reference = null
let referenceCollider = null
let buttonClickDelay = 0.0
let LerpMenu = true
let menuscale = 0.78
let righthand = false // Left hand menu, right hand controller pointer
let deltaTime = 0.0
let time = 0.0
let menuAnimTime = 0
let currentCategory = 0
let currentPage = 0
let currentNotification = ""
let notifactionResetTime = 0
let menuSnapNextFrame = false
let selectedMobIndex = 0

// --- Inputs ---
let leftPrimary = false
let leftSecondary = false
let rightPrimary = false
let rightSecondary = false
let leftGrab = false
let rightGrab = false
let leftTrigger = false
let rightTrigger = false
let leftStick = false
let rightStick = false
let leftStickX = 0.0
let leftStickY = 0.0
let rightStickX = 0.0
let rightStickY = 0.0
let prevLeftGrab = false
let prevRightGrab = false

// --- Mob Spawning Helpers & Records ---
const acMobIdByName = {
  Unidentified: 0,
  Angler: 1,
  AnglerController: 1,
  AnglerMad: 2,
  AnglerMadController: 2,
  Armstrong: 3,
  ArmstrongController: 3,
  ArmstrongMad: 4,
  ArmstrongMadController: 4,
  Banshee: 5,
  BansheeController: 5,
  Bomb: 6,
  BombController: 6,
  Bomber: 7,
  BomberController: 7,
  BomberFlashbang: 8,
  BomberFlashbangController: 8,
  BomberMad: 9,
  BomberMadController: 9,
  Chicken: 10,
  ChickenController: 10,
  Cyst: 11,
  CystController: 11,
  FakeGorilla: 12,
  FakeGorillaController: 12,
  BigHead: 13,
  BigHeadController: 13,
  RedGreen: 14,
  RedGreenController: 14,
  Phantom: 15,
  PhantomController: 15,
  EvilEye: 16,
  EvilEyeController: 16,
  GiantThrower: 17,
  GiantThrowerController: 17,
  RedGreenMad: 18,
  RedGreenMadController: 18,
  Spider: 19,
  SpiderController: 19,
  FlyingSwarm: 20,
  FlyingSwarmController: 20,
  NextBot: 21,
  NextBotController: 21,
  Segway: 22,
  SegwayController: 22,
  NextBotStatic: 23,
  NextBotStaticController: 23,
  EvilEyePinata: 24,
  EvilEyePinataController: 24,
  EvilEyePinataLarge: 25,
  EvilEyePinataLargeController: 25,
  Lanky: 26,
  LankyController: 26,
  Blob: 27,
  BlobController: 27,
  Cutie: 28,
  CutieController: 28,
  SpiderCave: 29,
  SpiderCaveController: 29,
  ForestMob: 30,
  ForestMobController: 30,
  Mimic: 31,
  MimicController: 31,
  GraveyardBoss: 32,
  GraveyardBossController: 32,
  GiantController_GraveyardBoss: 32,
  Ringmaster: 33,
  RingmasterController: 33,
  Puppet: 34,
  PuppetController: 34,
  PolypMass: 35,
  PolypMassController: 35,
  RobotDog: 36,
  RobotDogController: 36,
  Shadow: 37,
  ShadowController: 37,
  Heart: 38,
  HeartController: 38,
  HeartMobController: 38,
  Slimey: 39,
  SlimeyController: 39,
  ShadowBoss: 40,
  ShadowBossController: 40,
  BigShark: 41,
  BigSharkController: 41,
  EdenZombie: 42,
  EdenZombieController: 42,
  Skinwalker: 43,
  SkinwalkerController: 43,
  YinWorm: 44,
  YinWormController: 44,
  YangWorm: 45,
  YangWormController: 45,
  ArmstrongSpace: 46,
  Smiley: 47
}
const acMobNameById = {
  0: "Unidentified",
  1: "Angler",
  2: "AnglerMad",
  3: "Armstrong",
  4: "ArmstrongMad",
  5: "Banshee",
  6: "Bomb",
  7: "Bomber",
  8: "BomberFlashbang",
  9: "BomberMad",
  10: "Chicken",
  11: "Cyst",
  12: "FakeGorilla",
  13: "BigHead",
  14: "RedGreen",
  15: "Phantom",
  16: "EvilEye",
  17: "GiantThrower",
  18: "RedGreenMad",
  19: "Spider",
  20: "FlyingSwarm",
  21: "NextBot",
  22: "Segway",
  23: "NextBotStatic",
  24: "EvilEyePinata",
  25: "EvilEyePinataLarge",
  26: "Lanky",
  27: "Blob",
  28: "Cutie",
  29: "SpiderCave",
  30: "ForestMob",
  31: "Mimic",
  32: "GraveyardBoss",
  33: "Ringmaster",
  34: "Puppet",
  35: "PolypMass",
  36: "RobotDog",
  37: "Shadow",
  38: "Heart",
  39: "Slimey",
  40: "ShadowBoss",
  41: "BigShark",
  42: "EdenZombie",
  43: "Skinwalker",
  44: "YinWorm",
  45: "YangWorm",
  46: "ArmstrongSpace",
  47: "Smiley"
}
const acMobAliases = {
  GiantController: "GiantThrower",
  GiantGreenController: "GiantThrower",
  Giant_GreenController: "GiantThrower",
  GreenGiantController: "GiantThrower",
  Green_GiantController: "GiantThrower",
  YanWormController: "YangWorm",
  YingWormController: "YinWorm",
  YinYanWormController: "YinWorm",
  YingYangWormController: "YinWorm",
  PrototypeSlenderController: "Shadow"
}
var mobList = []
function buildMobList() {
  mobList = []
  for (var key in acMobIdByName) {
    if (key.endsWith("Controller")) continue
    mobList.push({ name: key, id: acMobIdByName[key] })
  }
  mobList.sort(function(a, b) { return a.id - b.id })
}

// --- Item & VFX ID Lists ---
var itemIDs = [
  "item_ac_cola","item_pelican_case","item_rpg","item_alphablade","item_anti_gravity_grenade",
  "item_arena_pistol","item_arena_shotgun","item_arrow","item_arrow_bomb","item_arrow_heart",
  "item_arrow_lightbulb","item_arrow_teleport","item_axe","item_backpack","item_backpack_black",
  "item_backpack_green","item_backpack_large_base","item_backpack_large_basketball",
  "item_backpack_large_clover","item_backpack_pink","item_backpack_realistic",
  "item_backpack_small_base","item_backpack_space","item_backpack_white","item_backpack_with_flashlight",
  "item_bait_beetle","item_bait_fly","item_bait_glowworm","item_bait_magmar_ball","item_bait_mouse_trap",
  "item_bait_sardine","item_bait_shell","item_bait_starfish","item_bait_wallet","item_balloon",
  "item_balloon_heart","item_bamboo_fishing_rod","item_banana","item_banana_chips","item_baseball_bat",
  "item_basic_fishing_rod","item_beans","item_big_cup","item_bighead_larva","item_bloodlust_vial",
  "item_boombox","item_boombox_fishing","item_boombox_neon","item_boomerang","item_box_fan",
  "item_brain_chunk","item_broccoli_grenade","item_broccoli_shrink_grenade","item_broom",
  "item_broom_halloween","item_bubble_gun","item_burrito","item_butcherpipe","item_butcherspear",
  "item_butchersword","item_calculator","item_cardboard_box","item_cardboard_dragon_body",
  "item_cardboard_dragon_head","item_ceo_plaque","item_chakra","item_clapper","item_cluster_grenade",
  "item_coconut_shell","item_cola","item_cola_large","item_company_ration","item_company_ration_heal",
  "item_cracker","item_crate","item_crossbow","item_crossbow_heart","item_crowbar","item_cubetrident",
  "item_cutie_dead","item_d20","item_demon_sword","item_disc","item_disposable_camera",
  "item_dragons_claw","item_drill","item_drill_neon","item_dynamite","item_dynamite_cube","item_egg",
  "item_electrical_tape","item_eraser","item_film_reel","item_finger_board","item_fish_boomfish",
  "item_fish_boot","item_fish_bottled_message","item_fish_carp","item_fish_chewna",
  "item_fish_clam_hookshot","item_fish_crappie","item_fish_crispie","item_fish_diamond_jade_koi",
  "item_fish_dollar_bill","item_fish_dragonfish","item_fish_fishsword","item_fish_gold_fish",
  "item_fish_hydracarp","item_fish_kissy","item_fish_license_plate","item_fish_magma_carp",
  "item_fish_nebula_fish","item_fish_nutfish","item_fish_rainbow_trout","item_fish_rotten_fish",
  "item_fish_salmon","item_fish_salmonster","item_fish_scaldfish","item_fish_seamine",
  "item_fish_shellfish_shield","item_fish_spicy_salmon","item_fish_tuna","item_fish_yellowcake",
  "item_fishing_terminal_bait_button","item_flamethrower","item_flamethrower_skull",
  "item_flamethrower_skull_ruby","item_flaregun","item_flashbang","item_flashlight",
  "item_flashlight_mega","item_flashlight_red","item_flipflop_realistic","item_floppy3","item_floppy5",
  "item_football","item_friend_launcher","item_frying_pan","item_gameboy","item_glowstick",
  "item_goldbar","item_goldcoin","item_goop","item_goopfish","item_great_sword","item_grenade",
  "item_grenade_gold","item_grenade_launcher","item_guided_boomerang","item_hammer_candy_cane",
  "item_harddrive","item_hatchet","item_hawaiian_drum","item_heart_chunk","item_heart_gun",
  "item_heartchocolatebox","item_hh_key","item_hookshot","item_hookshot_sword","item_hot_cocoa",
  "item_hoverpad","item_impulse_grenade","item_jetpack","item_joystick","item_joystick_inv_y",
  "item_keycard","item_lance","item_landmine","item_landmine_bee","item_lantern_cny",
  "item_large_banana","item_lava_fishing_rod","item_love_grenade","item_megaphone","item_metal_ball",
  "item_metal_ball_xmas","item_metal_plate","item_metal_plate_xmas","item_metal_rod",
  "item_metal_rod_xmas","item_metal_triangle","item_momboss_box","item_moneygun","item_mountain_key",
  "item_mug","item_needle","item_nut","item_nut_drop","item_ogre_hands","item_ore_copper_l",
  "item_ore_copper_m","item_ore_copper_s","item_ore_gold_l","item_ore_gold_m","item_ore_gold_s",
  "item_ore_hell","item_ore_silver_l","item_ore_silver_m","item_ore_silver_s","item_painting_canvas",
  "item_paperpack","item_pickaxe","item_pickaxe_cny","item_pickaxe_cube","item_pickaxe_realistic",
  "item_pinata_bat","item_pineapple","item_pipe","item_pistol_dragon","item_plank","item_plunger",
  "item_pogostick","item_police_baton","item_popcorn","item_portable_teleporter","item_prop_scanner",
  "item_pumpkin_bomb","item_pumpkin_pie","item_pumpkinjack","item_pumpkinjack_small",
  "item_quest_gy_skull","item_quest_gy_skull_special","item_quest_hlal_brain","item_quest_hlal_eyeball",
  "item_quest_hlal_flesh","item_quest_hlal_heart","item_quest_key_graveyard","item_quiver",
  "item_quiver_heart","item_radiation_gun","item_radioactive_broccoli","item_radioactive_fishing_rod",
  "item_randombox_mobloot_big","item_randombox_mobloot_medium","item_randombox_mobloot_small",
  "item_randombox_mobloot_weapons","item_randombox_mobloot_zombie","item_rare_card",
  "item_remote_controller","item_revolver","item_revolver_ammo","item_revolver_gold","item_ring_buoy",
  "item_robo_monke","item_robot_arm_left","item_robot_arm_right","item_robot_head","item_rope",
  "item_rpg_ammo","item_rpg_ammo_egg","item_rpg_ammo_spear","item_rpg_cny","item_rpg_easter",
  "item_rpg_smshr","item_rpg_spear","item_rubberducky","item_ruby","item_saddle","item_salmoncannon",
  "item_sawblade","item_sawblade_launcher","item_scanner","item_scissors","item_server_pad",
  "item_shield","item_shield_bones","item_shield_candy_cane","item_shield_police","item_shield_viking_1",
  "item_shield_viking_2","item_shield_viking_3","item_shield_viking_4","item_shotgun",
  "item_shotgun_ammo","item_shotgun_viper","item_shovel","item_shredder","item_shrinking_broccoli",
  "item_skipole","item_skishoe","item_skishoe_2","item_skishoe_3","item_skishoe_4","item_snail_friend",
  "item_snowball","item_snowboard","item_snowboard_2","item_snowboard_3","item_snowboard_4",
  "item_snowboard_auto","item_spear_candy_cane","item_special_fishing_rod",
  "item_special_fishing_rod_radar_part","item_special_fishing_rod_with_radar","item_stapler",
  "item_stash_grenade","item_steampunk_clip","item_steampunk_coils_big","item_steampunk_coils_small",
  "item_steampunk_gear_big","item_steampunk_gear_open_big","item_steampunk_gear_open_small",
  "item_steampunk_gear_small","item_steampunk_gear_spikes_big","item_steampunk_gear_spikes_small",
  "item_steampunk_gear_wheels","item_steampunk_lamp","item_steampunk_lightbulb",
  "item_steampunk_redgreen_hand","item_steampunk_scaffolding","item_steampunk_smokestack",
  "item_steampunk_wings","item_steel_beam","item_steel_beam_xmas","item_stellarsword_blue",
  "item_stellarsword_gold","item_stick_armbones","item_stick_bone","item_sticker_dispenser",
  "item_sticky_dynamite","item_stinky_cheese","item_tablet","item_tapedispenser","item_tele_grenade",
  "item_tele_pearl","item_teleport_gun","item_theremin","item_timebomb","item_toilet_paper",
  "item_toilet_paper_mega","item_toilet_paper_roll_empty","item_token_circus","item_trampoline",
  "item_treestick","item_tripwire_explosive","item_trophy","item_truss","item_truss_xmas",
  "item_turkey_leg","item_turkey_whole","item_ukulele","item_ukulele_gold","item_umbrella",
  "item_umbrella_clover","item_umbrella_squirrel","item_unidentified","item_upsidedown_loot",
  "item_uranium_chunk_l","item_uranium_chunk_m","item_uranium_chunk_s","item_viking_hammer",
  "item_viking_hammer_twilight","item_war_fan","item_wheelhandle","item_wheelhandle_big",
  "item_whoopie","item_wood_log","item_wood_pallet","item_wyrmpiercer","item_zipline_gun",
  "item_zombie_meat","item_apescalibur","item_balloon_smiley","item_module_blast_1",
  "item_module_blast_2","item_module_blast_3","item_module_boost_1","item_module_boost_2",
  "item_module_boost_3","item_module_gravity_1","item_module_minigun_1","item_module_minigun_2",
  "item_module_minigun_3","item_module_stasis_1","item_quest_vhs_asteroids",
  "item_quest_vhs_derelictvessel","item_quest_vhs_wormhole","item_randombox_modules",
  "item_soccer_ball","item_soccer_goalposts","item_alienblaster"
]

var VFXTypes = {
  None: 255,
  MuzzleFlash_Shotgun: 0,
  MuzzleFlash_FlareGun: 1,
  CrateBreak: 2,
  MuzzleFlash_SmallGun: 3,
  MuzzleFlash_GoldRevolver: 4,
  MuzzleFlash_DragonPistol: 5,
  MuzzleFlash_ViperShotgun: 6,
  Explosion_FlareGun: 32,
  Explosion_Coins: 33,
  Explosion_Nuts: 34,
  Explosion_Keys: 35,
  Explosion_Balloon: 36,
  Explosion_TeleGrenadeSrc: 37,
  Player_Touch_Lava: 38,
  Portal_Teleport: 39,
  Explosion_Coins_Vertical: 40,
  Autumn_Leaves_Burst: 41,
  Explosion_Feathers: 42,
  Explosion_Popcorn: 43,
  Electricity_Small: 44,
  Impact_Flaregun: 64,
  Impact_Snowball: 65,
  Impact_GoldRevolver: 66,
  Impact_MeleeHit: 67,
  Impact_BigGroundHit: 68,
  Impact_MeleeHit_CriticalSmall: 69,
  Impact_MeleeHit_CriticalLarge: 70,
  Impact_MeleeHit_AoE: 71,
  Research_ZiplineAttachDetach: 96,
  Research_Purchase1RP: 97,
  Research_Purchase5RP: 98,
  Research_Purchase10RP: 99,
  Research_PurchaseRPBundle: 100,
  Rope_ZiplineAttachDetach: 110,
  MeatExplosion_1: 128,
  MeatExplosion_2: 129,
  MeatExplosion_Headshot: 130,
  ServerRoomSplash_Small: 160,
  ServerRoomSplash_Big: 161,
  RAMActivationSparks: 162,
  GreenBlink: 170,
  ConfettiBurst: 174,
  Ethereal_Void: 180,
  MomBoss_NailBreak: 181,
  MidAirJump_Fart: 182,
  FuelExplosion: 183
}

var itemList = []
var vfxList = []
function buildItemList() {
  itemList = []
  for (var i = 0; i < itemIDs.length; i++) {
    itemList.push({ name: itemIDs[i] })
  }
}
function buildVFXList() {
  vfxList = []
  for (var key in VFXTypes) {
    vfxList.push({ name: key, id: VFXTypes[key] })
  }
  vfxList.sort(function(a, b) { return a.id - b.id })
}

let selectedIdType = 0  // 0=mob, 1=item, 2=vfx
let selectedItemIndex = 0
let selectedVFXIndex = 0

// --- GunLib State ---
let gunObject = null
let gunHitEffect = null
let gunTriggerTime = 0
let GunLine = null
let gunLockedPlayer = null
let gunLockedPos = null
let menuBackPanel = null

// --- Search State ---
let searchQuery = ""

// --- Football Kidnapper State ---
let basketballObject = null
let basketballTargetPlayer = null
let hasSpawnedForCurrentTarget = false
let lastBasketballTeleportTime = 0
let lastDebugTime = 0

// --- Mod State ---
let flyEnabled = false
let flyVelocity = [0, 0, 0]
let joystickFlyEnabled = false
let joystickFlyVelocity = [0, 0, 0]
let platformsEnabled = false
let platformObjects = []
let longArmsEnabled = false
let armScaleIndex = 0
let invisibleEnabled = false
let infHealthEnabled = false
let infAmmoEnabled = false
let noRecoilEnabled = false
let rapidFireEnabled = false
let itemRainEnabled = false
let giveFlyAllEnabled = false
let orbitPlayersEnabled = false
let orbitAngle = 0
let selectedGunIndex = 0
let gunDelay = 0

// --- New Mod State ---
let noclipEnabled = false
let speedBoostEnabled = false
let fastFlyEnabled = false
let superFastFlyEnabled = false
let highGravityEnabled = false
let zeroGravityEnabled = false
let lowGravityEnabled = false
let rpcKillAllLoopEnabled = false
let rpcStunAllLoopEnabled = false
let rpcRagdollAllLoopEnabled = false
let rpcChaosAllLoopEnabled = false
let rpcRainbowAllEnabled = false
let rpcInfMoneyAllEnabled = false
let rpcHitAllLoopEnabled = false
let rpcBounceAllLoopEnabled = false
let rpcKillReviveLoopEnabled = false
let rpcForceWantedAllEnabled = false
let rpcFakeDeathMeLoopEnabled = false
let rpcKillMeLoopEnabled = false
let rpcAllColorRainbowLoopEnabled = false
let mobFreezeEnabled = false
let mobKillLoopEnabled = false
let mobBounceLoopEnabled = false
let mobTPEnabled = false
let mobMassScaleEnabled = false
let mobVFXSpamEnabled = false
let forceSpawnedMobsStayEnabled = false
let mobOrbitEnabled = false
let itemTornadoEnabled = false
let lagAllItemsEnabled = false
let cageAllEnabled = false
let stashDupeEnabled = false
let multiShootEnabled = false
let noShotgunCooldown = false
let rocketHandsEnabled = false
let flaregunHandsEnabled = false
let boomspearHandsEnabled = false
let robotDogRPGEnabled = false
let eggHandsEnabled = false
let goopSpammerEnabled = false
let pissModEnabled = false
let grabSellingMachineEnabled = false
let prefabOrbitEnabled = false
let rightHandDuperEnabled = false
let itemLauncherAllEnabled = false
let allPlayerGunBuffsEnabled = false
let spazExplodeMachineEnabled = false
let spawnNetPlayerEnabled = false
let sellAllItemsEnabled = false
let forceDevModeEnabled = false
let rainbowHeldItemEnabled = false
let rainbowAllItemsEnabled = false
let randomHeldItemEnabled = false
let randomAllItemsEnabled = false
let spawnTinyItemsEnabled = false
let spawnBigItemsEnabled = false
let spawnRainbowItemsEnabled = false
let hueVal = 0
let satVal = 0
let scaleVal = 0
let itemLauncherDelay = 0
let itemIndex = 0
let containerFreedomEnabled = false
let rpcProtectEnabled = false
let sellValueMultEnabled = false
let sellValueMult = 1.0
let spamSfxEnabled = false
let spamSfxDelay = 0
let spamSfxIndex = 0
let rpcChaosEnabled = false
let sellingMachineObjs = []
let selectedShooterIndex = 0
let arenaKillerBypassEnabled = false
let fishingHooksInstalled = false
let heartGunHooksInstalled = false
let miningLaserHooksInstalled = false
let salmonCannonHookInstalled = false
let containerFreedomInstalled = false
let multiBuyInstalled = false
let rpcProtectInstalled = false

// --- Nametag State ---
let nametagEnabled = false
let nametagRoles = {}
let nametagLastFetch = 0
let nametagObjects = {}
const NAMETAG_API = "https://YOUR-VERCEL-APP.vercel.app"
const ROLE_COLORS = {
  Owner: [1, 0.13, 0.13],
  Founder: [0.72, 0.53, 0.04],
  Staff: [0.13, 0.4, 1],
  Helper: [0.13, 0.67, 0.27],
  Premium: [0.6, 0.27, 1],
  Synapse: [0, 0.83, 0.83]
}

class ButtonInfo {
  constructor(config) {
    this.buttonText = config.buttonText
    this.method = config.method
    this.enableMethod = config.enableMethod
    this.disableMethod = config.disableMethod
    this.isTogglable = config.isTogglable ?? true
    this.toolTip = config.toolTip ?? null
    this.enabled = config.enabled ?? false
  }
}

// --- Main Hook Entry ---
Il2Cpp.perform(async () => {
  // Wait until IL2CPP domain is ready
  let domainReady = false
  while (!domainReady) {
    await new Promise(r => setTimeout(r, 1000))
    try {
      const test = Il2Cpp.domain.assembly("AnimalCompany").image
      if (test && !test.isNull()) domainReady = true
    } catch (_) {}
  }

  const images = {
    AnimalCompany: Il2Cpp.domain.assembly("AnimalCompany").image,
    "UnityEngine.CoreModule": Il2Cpp.domain.assembly("UnityEngine.CoreModule")
      .image,
    "UnityEngine.PhysicsModule": Il2Cpp.domain.assembly(
      "UnityEngine.PhysicsModule"
    ).image,
    "UnityEngine.TextRenderingModule": Il2Cpp.domain.assembly(
      "UnityEngine.TextRenderingModule"
    ).image,
    "Fusion.Runtime": Il2Cpp.domain.assembly("Fusion.Runtime").image,
    "Unity.TextMeshPro": Il2Cpp.domain.assembly("Unity.TextMeshPro").image,
    "UnityEngine.XRModule": Il2Cpp.domain.assembly("UnityEngine.XRModule").image
  }

  const AssemblyCSharp = images["AnimalCompany"]
  const UnityEngineCore = images["UnityEngine.CoreModule"]
  const UnityEnginePhysics = images["UnityEngine.PhysicsModule"]
  const UnityEngineTextRendering = images["UnityEngine.TextRenderingModule"]
  const UnityTextMeshPro = images["Unity.TextMeshPro"]
  const UnityEngineXR = images["UnityEngine.XRModule"]

  const GTPlayerClass = AssemblyCSharp.class("AnimalCompany.GorillaLocomotion")
  const NetPlayer = AssemblyCSharp.class("AnimalCompany.NetPlayer")
  const PCClass = AssemblyCSharp.class("AnimalCompany.PlayerController")
  const NManager = AssemblyCSharp.class("AnimalCompany.NetworkManager")
  const PrefabGen = AssemblyCSharp.class("AnimalCompany.PrefabGenerator")
  const GBIClass = AssemblyCSharp.class("AnimalCompany.GrabbableItem")
  const GorillaReportButton = AssemblyCSharp.class(
    "AnimalCompany.ComputerTerminalKey"
  )

  const InputDevices = UnityEngineXR.class("UnityEngine.XR.InputDevices")
  const CommonUsages = UnityEngineXR.class("UnityEngine.XR.CommonUsages")

  const GameObject = UnityEngineCore.class("UnityEngine.GameObject")
  const Object = UnityEngineCore.class("UnityEngine.Object")
  const Vector3 = UnityEngineCore.class("UnityEngine.Vector3")
  const Quaternion = UnityEngineCore.class("UnityEngine.Quaternion")
  const Time = UnityEngineCore.class("UnityEngine.Time")
  const Resources = UnityEngineCore.class("UnityEngine.Resources")
  const Material = UnityEngineCore.class("UnityEngine.Material")
  const Renderer = UnityEngineCore.class("UnityEngine.Renderer")
  const Color = UnityEngineCore.class("UnityEngine.Color")
  const Shader = UnityEngineCore.class("UnityEngine.Shader")
  const Camera = UnityEngineCore.class("UnityEngine.Camera")

  const BoxCollider = UnityEnginePhysics.class("UnityEngine.BoxCollider")
  const Collider = UnityEnginePhysics.class("UnityEngine.Collider")
  const Rigidbody = UnityEnginePhysics.class("UnityEngine.Rigidbody")
  const Physics = UnityEnginePhysics.class("UnityEngine.Physics")
  const Component = UnityEngineCore.class("UnityEngine.Component")
  const LineRenderer = UnityEngineCore.class("UnityEngine.LineRenderer")
  const Texture2D = UnityEngineCore.class("UnityEngine.Texture2D")
  const MeshRenderer = UnityEngineCore.class("UnityEngine.MeshRenderer")
  let MobDataUtilityClass = null
  try {
    MobDataUtilityClass = AssemblyCSharp.class("AnimalCompany.MobDataUtility")
  } catch (_) {}

  const Font = UnityEngineTextRendering.class("UnityEngine.Font")
  let TextMesh = null
  let TextMeshPro3D = null
  let TMPSettingsClass = null
  let tmpDefaultFontAsset = null

  try {
    TextMesh = UnityEngineTextRendering.class("UnityEngine.TextMesh")
  } catch (_) {}
  if (!TextMesh) {
    try {
      TextMesh = UnityEngineCore.class("UnityEngine.TextMesh")
    } catch (_) {}
  }
  try {
    TextMeshPro3D = UnityTextMeshPro.class("TMPro.TextMeshPro")
  } catch (_) {}
  try {
    TMPSettingsClass = UnityTextMeshPro.class("TMPro.TMP_Settings")
  } catch (_) {}

  let GTPlayer = null
  let UberShader = null
  let TextShader = null
  try {
    UberShader = Shader.method("Find").invoke(
      Il2Cpp.string("Universal Render Pipeline/Unlit")
    )
  } catch (_) {}
  try {
    TextShader = Shader.method("Find").invoke(Il2Cpp.string("UI/Default"))
  } catch (_) {}
  if (!UberShader || UberShader.isNull?.())
    try {
      UberShader = Shader.method("Find").invoke(Il2Cpp.string("Standard"))
    } catch (_) {}
  if (!TextShader || TextShader.isNull?.())
    try {
      TextShader = Shader.method("Find").invoke(
        Il2Cpp.string("Sprites/Default")
      )
    } catch (_) {}

  const zeroVector = Vector3.field("zeroVector").value
  const oneVector = Vector3.field("oneVector").value
  const identityQuaternion = Quaternion.field("identityQuaternion").value

  let leftHandTransform = null
  let rightHandTransform = null
  let headCollider = null
  let bodyCollider = null
  let arial = null
  let menuFontWarned = false

  const NULL = Il2Cpp.reference(
    Il2Cpp.domain
      .assembly("mscorlib")
      .image.class("System.Object")
      .alloc()
  )

  // --- References Retrieval ---
  function isLiveObject(obj) {
    try {
      return !!obj && !(obj.isNull?.() ?? true)
    } catch (_) {
      return false
    }
  }

  function refreshRuntimeRefs() {
    try {
      const player = GTPlayerClass.field("<Instance>k__BackingField").value
      if (isLiveObject(player)) GTPlayer = player
    } catch (_) {}
    try {
      if (isLiveObject(GTPlayer)) {
        try {
          leftHandTransform = GTPlayer.field("leftHandTransform").value
        } catch (_) {}
        try {
          rightHandTransform = GTPlayer.field("rightHandTransform").value
        } catch (_) {}
        try {
          headCollider = GTPlayer.field("headCollider").value
        } catch (_) {}
        try {
          bodyCollider = GTPlayer.field("bodyCollider").value
        } catch (_) {}
      }
    } catch (_) {}
    return (
      isLiveObject(GTPlayer) &&
      isLiveObject(leftHandTransform) &&
      isLiveObject(rightHandTransform) &&
      isLiveObject(bodyCollider)
    )
  }

  function getarialnocrash2() {
    if (arial && !arial.isNull()) return arial
    try {
      arial = Resources.method("GetBuiltinResource", 1)
        .inflate(Font)
        .invoke(Il2Cpp.string("Arial.ttf"))
    } catch (e) {
      arial = null
      if (!menuFontWarned) {
        menuFontWarned = true
        console.error("[menu] Arial font load failed; text will retry later")
      }
    }
    return arial
  }

  function gettmpfontnocrash() {
    if (tmpDefaultFontAsset && !tmpDefaultFontAsset.isNull())
      return tmpDefaultFontAsset
    if (!TMPSettingsClass) return null
    try {
      tmpDefaultFontAsset = TMPSettingsClass.method(
        "get_defaultFontAsset"
      ).invoke()
    } catch (_) {}
    return tmpDefaultFontAsset && !tmpDefaultFontAsset.isNull()
      ? tmpDefaultFontAsset
      : null
  }

  function Destroy(object) {
    try {
      if (!object || object.isNull?.()) return
      Object.method("Destroy", 1).invoke(object)
    } catch (_) {}
  }

  function getComponent(obj, type) {
    try {
      if (!obj || obj.isNull?.()) return null
      return obj
        .method("GetComponent", 1)
        .inflate(type)
        .invoke()
    } catch (_) {
      return null
    }
  }

  function addComponent(obj, type) {
    return obj
      .method("AddComponent", 1)
      .inflate(type)
      .invoke()
  }
  function getTransform(obj) {
    return obj.method("get_transform").invoke()
  }

  function createEmptyObject(name = "", parent = null) {
    let obj = null
    try {
      obj = GameObject.alloc()
      try {
        obj.method(".ctor", 1).invoke(Il2Cpp.string(name))
      } catch (_) {
        obj.method(".ctor", 0).invoke()
        try {
          obj.method("set_name").invoke(Il2Cpp.string(name))
        } catch (_) {}
      }
    } catch (_) {
      obj = createObject(
        zeroVector,
        identityQuaternion,
        oneVector,
        3,
        [0, 0, 0, 0],
        parent
      )
      try {
        const col = getComponent(obj, Collider)
        if (col && !col.isNull()) col.method("set_enabled").invoke(false)
      } catch (_) {}
      return obj
    }
    const transform = getTransform(obj)
    if (parent != null) transform.method("SetParent", 2).invoke(parent, false)
    return obj
  }

  function createObject(
    pos = zeroVector,
    rot = identityQuaternion,
    scale = oneVector,
    primitiveType = 3,
    colorArr = [1, 1, 1, 1],
    parent = null,
    enableCollider = false
  ) {
    const obj = GameObject.method("CreatePrimitive").invoke(primitiveType)
    const renderer = getComponent(obj, Renderer)
    if (colorArr[3] == 0) {
      renderer.method("set_enabled").invoke(false)
    } else {
      const material = renderer.method("get_material").invoke()
      material.method("set_shader").invoke(UberShader)
      material.method("set_color").invoke(colorArr)
    }
    const col = getComponent(obj, Collider)
    if (col && !col.isNull()) {
      if (enableCollider) {
        col.method("set_enabled").invoke(true)
        col.method("set_isTrigger").invoke(true)
      } else {
        col.method("set_isTrigger").invoke(true)
      }
    }
    const transform = getTransform(obj)
    if (parent != null) transform.method("SetParent", 2).invoke(parent, false)
    transform.method("set_position").invoke(pos)
    transform.method("set_rotation").invoke(rot)
    transform.method("set_localScale").invoke(scale)
    return obj
  }

  function setMenuTextScale(textTransform, scaleObject, baseScale) {
    try {
      const currentMenuScale = getTransform(scaleObject)
        .method("get_localScale")
        .invoke()
      const sx = Math.abs(currentMenuScale.field("x").value) || 1.0
      const sy = Math.abs(currentMenuScale.field("y").value) || 1.0
      const sz = Math.abs(currentMenuScale.field("z").value) || 1.0
      const xScale = (baseScale * 0.42) / sx
      textTransform
        .method("set_localScale")
        .invoke([-xScale, baseScale / sy, baseScale / sz])
    } catch (_) {
      try {
        textTransform
          .method("set_localScale")
          .invoke([-(baseScale * 0.42), baseScale, baseScale])
      } catch (_) {}
    }
  }

  function renderMenuText(
    textRootObject,
    surfaceObject,
    text = "",
    color = [1, 1, 1, 1],
    pos = zeroVector,
    size = oneVector
  ) {
    if (!TextMesh && !TextMeshPro3D) return
    const textObj = createEmptyObject("MenuText", getTransform(textRootObject))
    const widthFactor = Math.max(size?.[0] ?? 1.0, 0.2)
    const heightFactor = Math.max((size?.[1] ?? 0.1) / 0.1, 0.6)
    const textLen = Math.max((text ?? "").trim().length, 1)
    const isButtonLabel = widthFactor <= 0.9
    const lengthFactor = isButtonLabel
      ? Math.max(0.55, Math.min(1.0, 10.5 / textLen))
      : Math.max(0.55, Math.min(1.0, 20.0 / textLen))
    const finalScale =
      (isButtonLabel ? 0.034 : 0.022) * heightFactor * lengthFactor

    if (TextMeshPro3D) {
      const title = addComponent(textObj, TextMeshPro3D)
      const tmpFont = gettmpfontnocrash()
      if (tmpFont && !tmpFont.isNull()) {
        try {
          title.method("set_font").invoke(tmpFont)
        } catch (_) {}
        try {
          const textRenderer = getComponent(textObj, Renderer)
          if (textRenderer && !textRenderer.isNull()) {
            textRenderer.method("set_enabled").invoke(true)
            try {
              textRenderer
                .method("set_sharedMaterial")
                .invoke(tmpFont.method("get_material").invoke())
            } catch (_) {
              try {
                textRenderer
                  .method("set_material")
                  .invoke(tmpFont.method("get_material").invoke())
              } catch (_) {}
            }
          }
        } catch (_) {}
      }
      try {
        title.method("SetText", 1).invoke(Il2Cpp.string(text))
      } catch (_) {
        try {
          title.method("set_text").invoke(Il2Cpp.string(text))
        } catch (_) {}
      }
      try {
        title
          .method("set_fontSize")
          .invoke((isButtonLabel ? 6.4 : 4.35) * heightFactor)
      } catch (_) {}
      try {
        title.method("set_color").invoke(color)
      } catch (_) {}
      try {
        title.method("set_alignment").invoke(514)
      } catch (_) {}
      try {
        title.method("set_enableWordWrapping").invoke(false)
      } catch (_) {}
      try {
        title.method("ForceMeshUpdate", 0).invoke()
      } catch (_) {}
    } else {
      const font = getarialnocrash2()
      if (!font || font.isNull()) return
      const title = addComponent(textObj, TextMesh)
      title.method("set_font").invoke(font)
      title.method("set_text").invoke(Il2Cpp.string(text))
      try {
        title.method("set_fontSize").invoke(isButtonLabel ? 150 : 128)
      } catch (_) {}
      try {
        title
          .method("set_characterSize")
          .invoke((isButtonLabel ? 0.041 : 0.031) * heightFactor)
      } catch (_) {}
      try {
        title.method("set_anchor").invoke(4)
      } catch (_) {}
      try {
        title.method("set_alignment").invoke(1)
      } catch (_) {}
      try {
        title.method("set_color").invoke(color)
      } catch (_) {}
      try {
        const textRenderer = getComponent(textObj, Renderer)
        if (textRenderer && !textRenderer.isNull()) {
          textRenderer.method("set_enabled").invoke(true)
          try {
            textRenderer
              .method("set_sharedMaterial")
              .invoke(font.method("get_material").invoke())
          } catch (_) {
            try {
              textRenderer
                .method("set_material")
                .invoke(font.method("get_material").invoke())
            } catch (_) {}
          }
        }
      } catch (_) {}
    }

    const textTransform = getTransform(textObj)
    try {
      const anchorPos = [(pos?.[0] ?? 0) + 0.0125, pos?.[1] ?? 0, pos?.[2] ?? 0]
      const worldAnchor = getTransform(surfaceObject)
        .method("TransformPoint", 1)
        .invoke(anchorPos)
      textTransform.method("set_position").invoke(worldAnchor)
    } catch (_) {
      textTransform.method("set_localPosition").invoke(pos)
    }
    try {
      const surfaceRotation = getTransform(surfaceObject)
        .method("get_rotation")
        .invoke()
      const faceRotation = Quaternion.method("op_Multiply").invoke(
        surfaceRotation,
        Quaternion.method("Euler").invoke(0.0, 90.0, 90.0)
      )
      textTransform.method("set_rotation").invoke(faceRotation)
    } catch (_) {
      textTransform
        .method("set_localRotation")
        .invoke(Quaternion.method("Euler").invoke(0.0, 90.0, 90.0))
    }
    setMenuTextScale(textTransform, menu, finalScale)
  }

  function setRendererColorSafe(obj, color) {
    try {
      if (!obj || obj.isNull?.()) return
      const renderer = getComponent(obj, Renderer)
      if (!renderer || renderer.isNull?.()) return
      const material = renderer.method("get_material").invoke()
      if (material && !material.isNull?.())
        material.method("set_color").invoke(color)
    } catch (_) {}
  }

  function setTextColorSafe(obj, color) {
    try {
      if (!obj || obj.isNull?.()) return
      try {
        const tmp = getComponent(obj, TextMeshPro3D)
        if (tmp && !tmp.isNull?.()) {
          tmp.method("set_color").invoke(color)
          return
        }
      } catch (_) {}
      try {
        const tm = getComponent(obj, TextMesh)
        if (tm && !tm.isNull?.()) {
          tm.method("set_color").invoke(color)
        }
      } catch (_) {}
    } catch (_) {}
  }

  function updateLiveMenuThemeVisuals() {
    try {
      if (!menu || menu.isNull?.()) return
      const gos = menu
        .method("GetComponentsInChildren", 0)
        .inflate(GameObject)
        .invoke(true)
      if (!gos || gos.isNull?.()) return
      for (let i = 0; i < gos.length; i++) {
        try {
          const go = gos.get(i)
          if (!go || go.isNull?.()) continue
          const name = (
            go.method("get_name").invoke()?.content ?? ""
          ).toString()
          if (name === "MenuBackground") {
            setRendererColorSafe(go, bgColor)
          } else if (name.startsWith("@")) {
            const buttonData = getIndex(name.slice(1))
            if (buttonData) {
              setRendererColorSafe(
                go,
                buttonData.enabled ? buttonPressedColor : buttonColor
              )
            }
          } else if (name === "MenuText") {
            setTextColorSafe(go, textColor)
          }
        } catch (_) {}
      }
    } catch (_) {}
  }

  function updateButtonColor(button, buttonData) {
    const renderer = getComponent(button, Renderer)
    if (!renderer) return
    const material = renderer.method("get_material").invoke()
    material
      .method("set_color")
      .invoke(buttonData.enabled ? buttonPressedColor : buttonColor)
  }

  function reloadMenu() {
    try {
      if (menu != null && !menu.isNull?.()) {
        Object.method("Destroy", 1).invoke(menu)
        menu = null
      }
    } catch (_) {}
    menuSnapNextFrame = true
    try {
      if ((righthand && rightSecondary) || (!righthand && leftSecondary)) {
        renderMenu()
      }
    } catch (_) {}
  }

  function renderMenu() {
    menuSnapNextFrame = true
    menu = createObject(zeroVector, identityQuaternion, [0.1, 0.275, 0.36], 3, [
      0,
      0,
      0,
      0
    ])
    try {
      menu.method("set_name").invoke(Il2Cpp.string("MenuRoot"))
    } catch (_) {}
    Destroy(getComponent(menu, BoxCollider))

    var menuBackground = createObject(
      [0.1, 0, 0],
      identityQuaternion,
      [0.1, 1, 1],
      3,
      bgColor,
      getTransform(menu)
    )
    try {
      menuBackground.method("set_name").invoke(Il2Cpp.string("MenuBackground"))
    } catch (_) {}
    Destroy(getComponent(menuBackground, BoxCollider))

    const textRootObject = createEmptyObject("MenuTextRoot", getTransform(menu))
    renderMenuText(
      textRootObject,
      menuBackground,
      menuName,
      textColor,
      [0.5, 0, 0.43],
      [1.0, 0.12]
    )

    var disconnectButton = createObject(
      [0.1, 0.0, 0.225],
      identityQuaternion,
      [0.09, 0.9, 0.08],
      3,
      buttonColor,
      getTransform(menu),
      true
    )
    disconnectButton.method("set_name").invoke(Il2Cpp.string("@Disconnect"))
    addComponent(disconnectButton, GorillaReportButton)
    getComponent(disconnectButton, BoxCollider)
      .method("set_isTrigger")
      .invoke(true)
    renderMenuText(
      textRootObject,
      disconnectButton,
      "Disconnect",
      textColor,
      [0.5, 0, 0],
      [0.82, 0.095]
    )

    if (time > notifactionResetTime) currentNotification = ""
    var displayNotification = currentNotification
    if (currentCategory === 44) displayNotification = "Search: " + (searchQuery || "_") + "_"
    renderMenuText(
      textRootObject,
      disconnectButton,
      displayNotification,
      textColor,
      [0.5, 0, 0.88],
      [0.74, 0.13]
    )

    // --- Dynamic Search Results ---
    if (currentCategory === 45) {
      var searchPage = [
        new ButtonInfo({
          buttonText: "Back To Search",
          method: () => { currentCategory = 44; currentPage = 0; reloadMenu() },
          isTogglable: false,
          toolTip: "Returns to search keyboard."
        })
      ]
      if (searchQuery.trim() !== "") {
        var query = searchQuery.trim().toLowerCase()
        var skipTexts = new Set(["Search","Exit Search","Backspace","Clear","Space","Back To Search","No results found","Disconnect","GlobalReturn","PreviousPage","NextPage","Back"])
        var seen = new Set()
        for (var si = 0; si < buttons.length; si++) {
          if (si === 44 || si === 45 || si === 32 || !buttons[si]) continue
          for (var sbi = 0; sbi < buttons[si].length; sbi++) {
            var sbtn = buttons[si][sbi]
            if (!skipTexts.has(sbtn.buttonText) && sbtn.buttonText.toLowerCase().indexOf(query) !== -1) {
              if (!seen.has(sbtn.buttonText)) {
                seen.add(sbtn.buttonText)
                searchPage.push(sbtn)
              }
            }
          }
        }
      }
      if (searchPage.length === 1) {
        searchPage.push(new ButtonInfo({ buttonText: "No results found", method: () => {}, isTogglable: false }))
      }
      buttons[45] = searchPage
    }

    let renderedCount = 0
    const targetMods = buttons[currentCategory]
      .slice(currentPage * 8)
      .slice(0, 8)
    targetMods.forEach(buttonData => {
      const button = createObject(
        [0.105, 0, 0.13 - renderedCount * 0.039],
        identityQuaternion,
        [0.09, 0.9, 0.076],
        3,
        buttonData.enabled ? buttonPressedColor : buttonColor,
        getTransform(menu)
      )
      button.method("set_name").invoke(Il2Cpp.string("@" + buttonData.buttonText))
      addComponent(button, GorillaReportButton)
      getComponent(button, BoxCollider).method("set_isTrigger").invoke(true)
      renderMenuText(textRootObject, button, buttonData.buttonText, textColor, [0.5, 0, 0], [0.82, 0.095])
      renderedCount++
    })
    function addNavBtn(label, name) {
      if (renderedCount >= 8) return
      var btn = createObject([0.105, 0, 0.13 - renderedCount * 0.039], identityQuaternion, [0.09, 0.9, 0.076], 3, buttonPressedColor, getTransform(menu), true)
      btn.method("set_name").invoke(Il2Cpp.string(name))
      addComponent(btn, GorillaReportButton)
      getComponent(btn, BoxCollider).method("set_isTrigger").invoke(true)
      renderMenuText(textRootObject, btn, label, textColor, [0.5, 0, 0], [0.82, 0.095])
      renderedCount++
    }
    if (currentCategory !== 0) {
      var globalReturn = createObject([0.1, -0.175, -0.225], identityQuaternion, [0.09, 0.09, 0.09], 3, buttonColor, getTransform(menu), true)
      globalReturn.method("set_name").invoke(Il2Cpp.string("@GlobalReturn"))
      addComponent(globalReturn, GorillaReportButton)
      getComponent(globalReturn, BoxCollider).method("set_isTrigger").invoke(true)
      renderMenuText(textRootObject, globalReturn, "Back", textColor, [0.5, 0, 0], [0.82, 0.095])
    }
    var lastPage = Math.ceil(buttons[currentCategory].length / 8) - 1
    var prevBtn = createObject([0.1, 0.2, 0], identityQuaternion, [0.09, 0.2, 0.9], 3, currentPage > 0 ? buttonPressedColor : buttonColor, getTransform(menu), true)
    prevBtn.method("set_name").invoke(Il2Cpp.string("@PreviousPage"))
    addComponent(prevBtn, GorillaReportButton)
    getComponent(prevBtn, BoxCollider).method("set_isTrigger").invoke(true)
    renderMenuText(textRootObject, prevBtn, "<", textColor, [0.5, 0, 0], [0.82, 0.095])
    var nextBtn = createObject([0.1, -0.2, 0], identityQuaternion, [0.09, 0.2, 0.9], 3, currentPage < lastPage ? buttonPressedColor : buttonColor, getTransform(menu), true)
    nextBtn.method("set_name").invoke(Il2Cpp.string("@NextPage"))
    addComponent(nextBtn, GorillaReportButton)
    getComponent(nextBtn, BoxCollider).method("set_isTrigger").invoke(true)
    renderMenuText(textRootObject, nextBtn, ">", textColor, [0.5, 0, 0], [0.82, 0.095])

    getTransform(menu)
      .method("set_localScale")
      .invoke(
        Vector3.method("op_Multiply").invoke(
          Vector3.method("op_Multiply").invoke(
            getTransform(menu)
              .method("get_localScale")
              .invoke(),
            GTPlayer.field("<playerScale>k__BackingField").value
          ),
          menuscale
        )
      )
    recenterMenu()
  }

  function createBackPanel() {
    try {
      if (menuBackPanel && !menuBackPanel.isNull?.()) Destroy(menuBackPanel)
      menuBackPanel = createObject(
        [-0.01, 0, 0],
        Quaternion.method("Euler").invoke(0, 180, 0),
        [0.01, 1, 1],
        3,
        [0.05, 0, 0.1, 1],
        getTransform(menu),
        true
      )
      try { menuBackPanel.method("set_name").invoke(Il2Cpp.string("MenuBackPanel")) } catch (_) {}
    } catch (_) {}
  }

  function updateBackPanel() {}

  function renderReference() {
    if (righthand) {
      reference = createObject(
        zeroVector,
        identityQuaternion,
        [0.01, 0.01, 0.01],
        0,
        bgColor,
        leftHandTransform
      )
    } else {
      reference = createObject(
        zeroVector,
        identityQuaternion,
        [0.01, 0.01, 0.01],
        0,
        bgColor,
        rightHandTransform
      )
    }
    referenceCollider = getComponent(reference, Collider)
    getTransform(reference)
      .method("set_localPosition")
      .invoke([0.01, -0.117, 0.05])
    reference.method("set_layer").invoke(2)
    addComponent(reference, Rigidbody)
      .method("set_isKinematic")
      .invoke(true)
  }

  function recenterMenu() {
    const menuTransform = getTransform(menu)
    let targetPos, targetRot
    if (righthand) {
      targetPos = rightHandTransform.method("get_position").invoke()
      targetRot = rightHandTransform.method("get_rotation").invoke()
      targetRot = Quaternion.method("op_Multiply").invoke(
        targetRot,
        Quaternion.method("Euler").invoke(0, 0, 180)
      )
    } else {
      targetPos = leftHandTransform.method("get_position").invoke()
      targetRot = leftHandTransform.method("get_rotation").invoke()
    }

    if (menuSnapNextFrame) {
      menuTransform.method("set_position").invoke(targetPos)
      menuTransform.method("set_rotation").invoke(targetRot)
      menuSnapNextFrame = false
    } else if (LerpMenu) {
      const menuPos = menuTransform.method("get_position").invoke()
      menuTransform
        .method("set_position")
        .invoke(
          Vector3.method("Lerp").invoke(
            menuPos,
            targetPos,
            Math.min(1.0, deltaTime * 22)
          )
        )
      menuTransform
        .method("set_rotation")
        .invoke(
          Quaternion.method("Slerp").invoke(
            menuTransform.method("get_rotation").invoke(),
            targetRot,
            Math.min(1.0, deltaTime * 20)
          )
        )
    } else {
      menuTransform.method("set_position").invoke(targetPos)
      menuTransform.method("set_rotation").invoke(targetRot)
    }
  }

  function sendNotification(text = "", requiresReload = true, clearTime = 5) {
    const isOld = currentNotification == text
    notifactionResetTime = time + clearTime
    currentNotification = text
    if (requiresReload && !isOld) reloadMenu()
  }

  function axisDeadzone(value, deadzone = 0.16) {
    return Math.abs(value) < deadzone ? 0 : value
  }

  // --- Mob Spawn Logic ---
  let acMobValidatorBypassEnabled = false
  let acBeforeMobSpawnDelegate = null
  let acBeforeMobSpawnDelegateClass = null
  let acNetworkObjectSpawnDelegateRef = null
  let mobSpawnAsyncBroken = false

  function acAnimalCompanyImage() {
    return AssemblyCSharp
  }

  function acGetMobEnumField(name) {
    try {
      return acAnimalCompanyImage()
        .class("AnimalCompany.MobID")
        .field(name).value
    } catch (_) {}
    return null
  }

  function acResolveMobID(mobId) {
    if (typeof mobId === "number") {
      const enumName = acMobNameById[mobId | 0]
      return enumName ? acGetMobEnumField(enumName) : null
    }
    const rawName = String(mobId || "").replace(/^mob_prefab\//, "")
    const trimmed = rawName
      .replace(/Controller$/, "")
      .replace(/_?Controller$/, "")
    const candidates = [
      rawName,
      acMobAliases[rawName],
      trimmed,
      acMobAliases[trimmed]
    ].filter(Boolean)
    for (const candidate of candidates) {
      const enumVal = acGetMobEnumField(candidate)
      if (enumVal !== null) return enumVal
      if (Object.prototype.hasOwnProperty.call(acMobIdByName, candidate)) {
        const enumName = acMobNameById[acMobIdByName[candidate] | 0]
        const mapped = enumName ? acGetMobEnumField(enumName) : null
        if (mapped !== null) return mapped
      }
    }
    return null
  }

  function acEnableMobValidatorBypass() {
    if (acMobValidatorBypassEnabled) return
    try {
      acAnimalCompanyImage()
        .class("AnimalCompany.MobSpawnValidator")
        .method("IsMobAllowed", 1).implementation = () => true
      acMobValidatorBypassEnabled = true
      console.log("[MobValidatorBypass] IsMobAllowed hooked")
    } catch (e) {
      console.error("[MobValidatorBypass]", e)
    }
    try {
      var pgMethods = PrefabGen.methods
      console.log("[PrefabGen] === All methods (" + pgMethods.length + ") ===")
      for (var i = 0; i < pgMethods.length; i++) {
        try {
          var m = pgMethods[i]
          var mname = m.name.toString().toLowerCase()
          if (mname.includes("mob") || mname.includes("spawn") || mname.includes("item") || mname.includes("generate") || mname.includes("safe") || mname.includes("zone")) {
            console.log("[PrefabGen]   " + m.name + " params=" + m.parameterCount)
          }
        } catch (_) {}
      }
    } catch (e) { console.log("[PrefabGen] scan error: " + e) }
    try {
      var pgFields = PrefabGen.fields
      console.log("[PrefabGen] === Fields ===")
      for (var i = 0; i < pgFields.length; i++) {
        try {
          console.log("[PrefabGen]   field: " + pgFields[i].name + " type=" + pgFields[i].type.name)
        } catch (_) {}
      }
    } catch (_) {}
    try {
      var acImage = acAnimalCompanyImage()
      var safeClasses = ["ArenaTeamSafeZone", "PortableSafeZone", "ArenaGameManager", "ArenaEventManager"]
      for (var s = 0; s < safeClasses.length; s++) {
        try {
          var cls = acImage.class("AnimalCompany." + safeClasses[s])
          if (!cls || cls.isNull?.()) continue
          console.log("[SafeZone] === " + safeClasses[s] + " === ALL methods:")
          var methods = cls.methods
          for (var i = 0; i < methods.length; i++) {
            try {
              console.log("[SafeZone]   method: " + methods[i].name + " params=" + methods[i].parameterCount)
            } catch (_) {}
          }
          var fields = cls.fields
          for (var i = 0; i < fields.length; i++) {
            try {
              console.log("[SafeZone]   field: " + fields[i].name + " type=" + fields[i].type.name)
            } catch (_) {}
          }
        } catch (_) {}
      }
    } catch (e) { console.log("[SafeZoneScan] error: " + e) }
  }

  function acGetNetworkObjectSpawnDelegateRef() {
    if (acNetworkObjectSpawnDelegateRef) return acNetworkObjectSpawnDelegateRef
    try {
      const spawnDelegateClass = Il2Cpp.domain
        .assembly("Fusion.Runtime")
        .image.class("Fusion.NetworkObjectSpawnDelegate")
      acNetworkObjectSpawnDelegateRef = Il2Cpp.reference(
        spawnDelegateClass.alloc()
      )
    } catch (e) {
      console.error("[NetworkObjectSpawnDelegate]", e)
      acNetworkObjectSpawnDelegateRef = NULL
    }
    return acNetworkObjectSpawnDelegateRef
  }

  function acGetBeforeMobSpawnDelegate() {
    if (acBeforeMobSpawnDelegate) return acBeforeMobSpawnDelegate
    try {
      acBeforeMobSpawnDelegateClass = Il2Cpp.domain
        .assembly("Fusion.Runtime")
        .image.class("Fusion.NetworkRunner")
        .tryNested("OnBeforeSpawned")
      if (!acBeforeMobSpawnDelegateClass || acBeforeMobSpawnDelegateClass.isNull?.()) {
        acBeforeMobSpawnDelegateClass = null
        return null
      }
      const validator = acAnimalCompanyImage()
        .class("AnimalCompany.MobSpawnValidator")
      acBeforeMobSpawnDelegate = Il2Cpp.delegate(
        acBeforeMobSpawnDelegateClass,
        (_runner, networkObject) => {
          try {
            if (!networkObject || networkObject.handle.isNull()) return
            const networkId = networkObject.method("get_Id").invoke()
            validator.method("AddAllowMob", 1).invoke(networkId)
          } catch (e) { console.error("[BeforeMobSpawn]", e) }
        }
      )
    } catch (e) {
      console.error("[BeforeMobSpawn delegate]", e)
      acBeforeMobSpawnDelegate = null
    }
    return acBeforeMobSpawnDelegate
  }

  function spawnNetworkPrefab(prefabName, pos, rot) {
    try {
      const runner = PrefabGen.field("_instance")
        .value.method("get_runner")
        .invoke()
      if (!runner || runner.isNull()) return null
      const sources = runner
        .field("_config")
        .value.field("PrefabTable")
        .value.field("_sources").value
      const count = sources.method("get_Count").invoke()
      for (let i = 0; i < count; i++) {
        try {
          const source = sources.method("get_Item").invoke(i)
          const desc = source
            .method("get_Description")
            .invoke()
            .toString()
          if (desc.toLowerCase().includes(String(prefabName).toLowerCase())) {
            const no = source.method("WaitForResult").invoke()
            if (!no || no.isNull()) return null
            const makeZeroForType = type => {
              if (type.class.isEnum || type.isPrimitive) return 0
              if (!type.class.isValueType) return NULL
              const fields = type.class.fields.filter(f => !f.isStatic)
              if (fields.length === 0) return 0
              return fields.map(f => makeZeroForType(f.type))
            }
            const buildNullableArg = (nullableType, hasValue, value) => {
              const fields = nullableType.class.fields.filter(f => !f.isStatic)
              return fields.map(f => {
                const lname = f.name.toLowerCase()
                if (lname.includes("hasvalue")) return hasValue ? 1 : 0
                if (lname === "value")
                  return hasValue ? value : makeZeroForType(f.type)
                return makeZeroForType(f.type)
              })
            }
            const normalizeValue = (type, value) => {
              if (typeof value === "boolean") return value ? 1 : 0
              if (value instanceof Il2Cpp.ValueType) {
                const fields = type.class.fields.filter(f => !f.isStatic)
                if (fields.length === 0) return 0
                return fields.map(f =>
                  normalizeValue(f.type, f.bind(value).value)
                )
              }
              if (Array.isArray(value))
                return value.map(v => normalizeValue(type, v))
              return value
            }
            const buildNullableFromValueType = (nullableType, valueType) => {
              return buildNullableArg(
                nullableType,
                true,
                normalizeValue(valueType.type, valueType)
              )
            }
            let spawnMethod = null
            for (const m of runner.method("Spawn").overloads()) {
              if (m.parameterCount !== 6 || m.isGeneric) continue
              const p = m.parameters
              if (
                p[0].type.name.includes("Fusion.NetworkObject") &&
                p[1].type.name.startsWith("System.Nullable") &&
                p[1].type.name.includes("Vector3") &&
                p[2].type.name.startsWith("System.Nullable") &&
                p[2].type.name.includes("Quaternion") &&
                p[3].type.name.startsWith("System.Nullable") &&
                p[3].type.name.includes("PlayerRef") &&
                p[4].type.name.includes("OnBeforeSpawned") &&
                p[5].type.name.includes("NetworkSpawnFlags")
              ) {
                spawnMethod = m
                break
              }
            }
            if (!spawnMethod) return null
            const posArg = buildNullableFromValueType(
              spawnMethod.parameters[1].type,
              pos
            )
            const rotArg = buildNullableFromValueType(
              spawnMethod.parameters[2].type,
              rot
            )
            const authArg = buildNullableArg(
              spawnMethod.parameters[3].type,
              false,
              makeZeroForType(spawnMethod.parameters[3].type)
            )
            const onBeforeArg = spawnMethod.parameters[4].type.class.isValueType
              ? makeZeroForType(spawnMethod.parameters[4].type)
              : NULL
            const spawned = spawnMethod
              .bind(runner)
              .invoke(no, posArg, rotArg, authArg, onBeforeArg, 0)
            return spawned
          }
        } catch (_) {}
      }
    } catch (e) {
      console.error("spawnNetworkPrefab error: " + e)
    }
    return null
  }

  function stabilizeMobInstance(mob, fallbackPos = null) {
    try {
      if (!mob || mob.isNull?.()) return
      let go = mob
      try {
        const maybeGo = mob.method("get_gameObject").invoke()
        if (maybeGo && !maybeGo.isNull?.()) go = maybeGo
      } catch (_) {}
      try {
        go.method("SetActive").invoke(true)
      } catch (_) {}
      try {
        mob.method("set_enabled").invoke(true)
      } catch (_) {}
      try {
        const killer = go
          .method("GetComponentInChildren", 0)
          .inflate(AssemblyCSharp.class("AnimalCompany.ArenaItemKiller"))
          .invoke()
        if (killer && !killer.isNull?.()) {
          try {
            killer.method("set_enabled").invoke(false)
          } catch (_) {}
          try {
            killer.field("_isEnabled").value = false
          } catch (_) {}
        }
      } catch (_) {}
      if (fallbackPos) {
        try {
          const tf = getTransform(go)
          const cur = tf.method("get_position").invoke()
          if (cur.field("y").value < -5000)
            tf.method("set_position").invoke(fallbackPos)
        } catch (_) {}
      }
    } catch (_) {}
  }

  function spawnMobAtPos(mobEntry, pos, rot) {
    const trackSpawnedMob = spawned => {
      try {
        if (spawned && !spawned.isNull?.()) {
          stabilizeMobInstance(spawned, pos)
        }
      } catch (_) {}
      return spawned
    }

    const getMobPrefabName = () => {
      try {
        if (MobDataUtilityClass) {
          try {
            const nameObj = MobDataUtilityClass.method(
              "GetMobPrefabName"
            ).invoke(mobEntry.id)
            const text = nameObj?.content ?? String(nameObj ?? "")
            if (text && text !== "null" && text !== "?") return text
          } catch (_) {}
        }
      } catch (_) {}
      return null
    }

    const tryPrefabFallback = () => {
      try {
        const exactPrefab = getMobPrefabName()
        const cleanName = mobEntry.name.replace(/^mob_prefab\//, "")
        const fallbackNames = [
          exactPrefab,
          cleanName,
          "mob_prefab/" + cleanName,
          "mob_" + cleanName,
          cleanName.replace(/\s+/g, ""),
          cleanName.replace(/\s+/g, "_"),
          "Mob" + cleanName,
          cleanName + "Mob",
          cleanName + "Controller"
        ]
        for (const prefabName of fallbackNames) {
          if (!prefabName) continue
          const spawned = spawnNetworkPrefab(prefabName, pos, rot)
          if (spawned && !spawned.isNull?.()) return trackSpawnedMob(spawned)
        }
      } catch (_) {}
      return null
    }

    try {
      acEnableMobValidatorBypass()
      const spawnDelegate = acGetNetworkObjectSpawnDelegateRef()
      const beforeSpawn = acGetBeforeMobSpawnDelegate()
      const resolved =
        acResolveMobID(mobEntry.id) ?? acResolveMobID(mobEntry.name)

      console.log("[SpawnMob] name=" + mobEntry.name + " id=" + mobEntry.id + " resolved=" + resolved)

      if (resolved !== null) {
        let result = null
        if (!mobSpawnAsyncBroken) {
          try {
            result = PrefabGen.method("SpawnMobAsyncInternal", 6).invoke(
              mobEntry.id,
              pos,
              rot || identityQuaternion,
              NULL,
              NULL,
              Il2Cpp.string("menu")
            )
            console.log("[SpawnMob] SpawnMobAsyncInternal result=" + result)
          } catch (e) {
            console.log("[SpawnMob] SpawnMobAsyncInternal failed: " + e)
            if (String(e).toLowerCase().indexOf("access violation") >= 0) mobSpawnAsyncBroken = true
          }
        }

        if (result && !result.isNull?.()) {
          try { stabilizeMobInstance(result, pos) } catch (_) {}
          return result
        }
      }

      console.log("[SpawnMob] enum failed, trying prefab fallback...")
    } catch (e) {
      console.error(
        "[spawnMobAtPos] enum path " +
          mobEntry.name +
          " id=" +
          mobEntry.id +
          ": " +
          e
      )
    }

    const fallback = tryPrefabFallback()
    if (fallback && !fallback.isNull?.()) return fallback

    return null
  }

  // --- Inputs Reader ---
  function updateInput() {
    const leftDevice = InputDevices.method("GetDeviceAtXRNode", 1).invoke(4)
    const rightDevice = InputDevices.method("GetDeviceAtXRNode", 1).invoke(5)
    const outBool = Il2Cpp.alloc(1)
    const outVec2 = Il2Cpp.alloc(8)

    function readAxis2D(device) {
      try {
        const readUsage = usage => {
          try {
            outVec2.writeFloat(0)
            outVec2.add(4).writeFloat(0)
            const ok = device
              .method("TryGetFeatureValue", 2)
              .invoke(usage, outVec2)
            if (ok) {
              return [
                axisDeadzone(outVec2.readFloat()),
                axisDeadzone(outVec2.add(4).readFloat())
              ]
            }
          } catch (_) {}
          return [0, 0]
        }
        const candidates = []
        try {
          candidates.push(readUsage(CommonUsages.field("primary2DAxis").value))
        } catch (_) {}
        try {
          candidates.push(readUsage(CommonUsages.field("thumbstick").value))
        } catch (_) {}
        let best = [0, 0]
        let bestMag = 0
        for (const candidate of candidates) {
          const mag = Math.abs(candidate[0]) + Math.abs(candidate[1])
          if (mag > bestMag) {
            best = candidate
            bestMag = mag
          }
        }
        return best
      } catch (_) {}
      return [0, 0]
    }

    leftDevice
      .method("TryGetFeatureValue", 2)
      .invoke(CommonUsages.field("primaryButton").value, outBool)
    leftPrimary = outBool.readU8() !== 0
    leftDevice
      .method("TryGetFeatureValue", 2)
      .invoke(CommonUsages.field("secondaryButton").value, outBool)
    leftSecondary = outBool.readU8() !== 0
    leftDevice
      .method("TryGetFeatureValue", 2)
      .invoke(CommonUsages.field("gripButton").value, outBool)
    leftGrab = outBool.readU8() !== 0
    leftDevice
      .method("TryGetFeatureValue", 2)
      .invoke(CommonUsages.field("triggerButton").value, outBool)
    leftTrigger = outBool.readU8() !== 0
    leftDevice
      .method("TryGetFeatureValue", 2)
      .invoke(CommonUsages.field("primary2DAxisClick").value, outBool)
    leftStick = outBool.readU8() !== 0

    rightDevice
      .method("TryGetFeatureValue", 2)
      .invoke(CommonUsages.field("primaryButton").value, outBool)
    rightPrimary = outBool.readU8() !== 0
    rightDevice
      .method("TryGetFeatureValue", 2)
      .invoke(CommonUsages.field("secondaryButton").value, outBool)
    rightSecondary = outBool.readU8() !== 0
    rightDevice
      .method("TryGetFeatureValue", 2)
      .invoke(CommonUsages.field("triggerButton").value, outBool)
    rightTrigger = outBool.readU8() !== 0
    rightDevice
      .method("TryGetFeatureValue", 2)
      .invoke(CommonUsages.field("gripButton").value, outBool)
    rightGrab = outBool.readU8() !== 0
    rightDevice
      .method("TryGetFeatureValue", 2)
      .invoke(CommonUsages.field("primary2DAxisClick").value, outBool)
    rightStick = outBool.readU8() !== 0

    ;[leftStickX, leftStickY] = readAxis2D(leftDevice)
    ;[rightStickX, rightStickY] = readAxis2D(rightDevice)
  }

  // --- GunLib Functions ---
  function readVec3Components(vec) {
    return [
      (vec.field("x").value) || 0,
      (vec.field("y").value) || 0,
      (vec.field("z").value) || 0
    ]
  }
  function createGunLib() {
    try {
      if (gunObject && !gunObject.isNull?.()) destroyGunLib()
      gunObject = createObject(zeroVector, identityQuaternion, [1,1,1], 0, [0,0,0,0], null, false)
      gunHitEffect = createObject(zeroVector, identityQuaternion, [0.05, 0.05, 0.05], 0, [0.7, 0.3, 1, 0.8])
      getComponent(gunHitEffect, Renderer).method("set_enabled").invoke(false)
      gunTriggerTime = 0
    } catch (e) { console.error("[Gun Create]", e) }
  }
  function destroyGunLib() {
    try {
      if (gunObject && !gunObject.isNull?.()) Destroy(gunObject)
    } catch (_) {}
    try {
      if (GunLine && !GunLine.isNull?.()) {
        GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false)
        Destroy(GunLine.method("get_gameObject").invoke())
      }
    } catch (_) {}
    try {
      if (gunHitEffect && !gunHitEffect.isNull?.()) Destroy(gunHitEffect)
    } catch (_) {}
    gunObject = null; gunHitEffect = null; GunLine = null; gunLockedPlayer = null; gunLockedPos = null
  }
  function updateGunLib() {
    try {
      if (!gunObject || gunObject.isNull?.()) return
      var gripping = righthand ? leftGrab : rightGrab
      if (!gripping) {
        if (GunLine && !GunLine.isNull?.()) GunLine.method("get_gameObject").invoke().method("SetActive").invoke(false)
        if (gunHitEffect && !gunHitEffect.isNull?.()) getComponent(gunHitEffect, Renderer).method("set_enabled").invoke(false)
        gunTriggerTime = 0
        gunLockedPlayer = null
        gunLockedPos = null
        return
      }
      var handTransform = getTransform(righthand ? leftHandTransform : rightHandTransform)
      var handPos = handTransform.method("get_position").invoke()
      var fwd = handTransform.method("get_forward").invoke()
      var StartPosition = Vector3.method("op_Addition").invoke(handPos, Vector3.method("op_Multiply").invoke(fwd, 0.08))
      var triggerPressed = righthand ? leftTrigger : rightTrigger

      // --- Lock-on logic ---
      if (triggerPressed) {
        if (gunLockedPlayer && !gunLockedPlayer.isNull?.()) {
          try {
            var pTransform = gunLockedPlayer.method("get_physicsTransform").invoke()
            if (pTransform && !pTransform.isNull?.()) {
              gunLockedPos = pTransform.method("get_position").invoke()
            }
          } catch (_) { gunLockedPlayer = null; gunLockedPos = null }
        } else {
          var rayPlayer = resolveGunTargetPlayer()
          if (rayPlayer && !rayPlayer.isNull?.() && !playerIsLocal(rayPlayer)) {
            gunLockedPlayer = rayPlayer
            try {
              var pt = gunLockedPlayer.method("get_physicsTransform").invoke()
              if (pt && !pt.isNull?.()) gunLockedPos = pt.method("get_position").invoke()
            } catch (_) {}
          } else {
            var nearest = findNearestNonLocalPlayer(StartPosition)
            if (nearest && !nearest.isNull?.()) {
              gunLockedPlayer = nearest
              try {
                var pt2 = gunLockedPlayer.method("get_physicsTransform").invoke()
                if (pt2 && !pt2.isNull?.()) gunLockedPos = pt2.method("get_position").invoke()
              } catch (_) {}
            }
          }
        }
      } else {
        gunLockedPlayer = null
        gunLockedPos = null
      }

      // --- Beam endpoint ---
      var EndPosition
      var hitSpherePoint = null
      if (gunLockedPos) {
        EndPosition = gunLockedPos
        hitSpherePoint = gunLockedPos
      } else {
        var rayData = doGunRaycast()
        if (rayData.hit && rayData.point) {
          EndPosition = rayData.point
          hitSpherePoint = rayData.point
        } else {
          EndPosition = rayData.point
        }
      }

      if (gunHitEffect && !gunHitEffect.isNull?.()) {
        var showHit = hitSpherePoint != null
        getComponent(gunHitEffect, Renderer).method("set_enabled").invoke(showHit)
        if (showHit) getTransform(gunHitEffect).method("set_position").invoke(hitSpherePoint)
      }

      if (GunLine == null || GunLine.isNull?.()) {
        var lineObj = createObject(zeroVector, identityQuaternion, [1,1,1], 0, [0,0,0,0])
        GunLine = addComponent(lineObj, LineRenderer)
      } else {
        GunLine.method("get_gameObject").invoke().method("SetActive").invoke(true)
      }
      var lineMat = GunLine.method("get_material").invoke()
      lineMat.method("set_shader").invoke(TextShader)
      var beamColor = triggerPressed ? [0.6, 0.2, 1, 1] : [0.4, 0.1, 0.8, 0.7]
      if (gunLockedPos) beamColor = [1, 0.1, 0.4, 1]
      GunLine.method("set_startColor").invoke(beamColor)
      GunLine.method("set_endColor").invoke(beamColor)
      GunLine.method("set_startWidth").invoke(0.018)
      GunLine.method("set_endWidth").invoke(0.018)
      GunLine.method("set_useWorldSpace").invoke(true)
      if (triggerPressed) {
        gunTriggerTime += deltaTime
        var Step = 34
        GunLine.method("set_positionCount").invoke(Step)
        GunLine.method("SetPosition").invoke(0, StartPosition)
        var dirVec = readVec3Components(Vector3.method("op_Subtraction").invoke(EndPosition, StartPosition))
        var dirMag = Math.sqrt((dirVec[0] * dirVec[0]) + (dirVec[1] * dirVec[1]) + (dirVec[2] * dirVec[2])) || 1
        var dirNorm = [dirVec[0] / dirMag, dirVec[1] / dirMag, dirVec[2] / dirMag]
        var upBasis = [0, 1, 0]
        if (Math.abs(dirNorm[1]) > 0.92) upBasis = [1, 0, 0]
        var side = [
          (upBasis[1] * dirNorm[2]) - (upBasis[2] * dirNorm[1]),
          (upBasis[2] * dirNorm[0]) - (upBasis[0] * dirNorm[2]),
          (upBasis[0] * dirNorm[1]) - (upBasis[1] * dirNorm[0])
        ]
        var sideMag = Math.sqrt((side[0] * side[0]) + (side[1] * side[1]) + (side[2] * side[2])) || 1
        side = [side[0] / sideMag, side[1] / sideMag, side[2] / sideMag]
        var swirlUp = [
          (dirNorm[1] * side[2]) - (dirNorm[2] * side[1]),
          (dirNorm[2] * side[0]) - (dirNorm[0] * side[2]),
          (dirNorm[0] * side[1]) - (dirNorm[1] * side[0])
        ]
        var swirlUpMag = Math.sqrt((swirlUp[0] * swirlUp[0]) + (swirlUp[1] * swirlUp[1]) + (swirlUp[2] * swirlUp[2])) || 1
        swirlUp = [swirlUp[0] / swirlUpMag, swirlUp[1] / swirlUpMag, swirlUp[2] / swirlUpMag]
        for (var i = 1; i < (Step - 1); i++) {
          var t = i / (Step - 1)
          var Position = Vector3.method("Lerp").invoke(StartPosition, EndPosition, t)
          var swirlAngle = (gunTriggerTime * 9.0) + (t * Math.PI * 10.0)
          var swirlFade = Math.sin(t * Math.PI)
          var swirlRadius = (0.025 + (Math.sin((t * Math.PI * 2.0) + (gunTriggerTime * 2.4)) * 0.006)) * swirlFade
          var offset = [
            (side[0] * Math.cos(swirlAngle) + swirlUp[0] * Math.sin(swirlAngle)) * swirlRadius,
            (side[1] * Math.cos(swirlAngle) + swirlUp[1] * Math.sin(swirlAngle)) * swirlRadius,
            (side[2] * Math.cos(swirlAngle) + swirlUp[2] * Math.sin(swirlAngle)) * swirlRadius
          ]
          var finalPosition = Vector3.method("op_Addition").invoke(Position, offset)
          GunLine.method("SetPosition").invoke(i, finalPosition)
        }
        GunLine.method("SetPosition").invoke(Step - 1, EndPosition)
      } else {
        gunTriggerTime = 0
        GunLine.method("set_positionCount").invoke(2)
        GunLine.method("SetPosition").invoke(0, StartPosition)
        GunLine.method("SetPosition").invoke(1, EndPosition)
      }
    } catch (e) { console.error("[Gun Update]", e) }
  }

  // --- Nametag System ---
  function fetchNametagRoles() {
    try {
      if (Date.now() - nametagLastFetch < 60000 && nametagLastFetch > 0) return
      nametagLastFetch = Date.now()
      var WebClient = UnityEngineCore.class("System.Net.WebClient")
      var client = WebClient.method(".ctor").invoke()
      var responseStr = client.method("DownloadString").invoke(Il2Cpp.string(NAMETAG_API + "/api/roles"))
      var response = responseStr.toString()
      var parsed = JSON.parse(response)
      nametagRoles = {}
      for (var key in parsed) {
        nametagRoles[key.toLowerCase()] = parsed[key]
      }
      try { client.method("Dispose").invoke() } catch (_) {}
    } catch (e) {
      console.error("[Nametag Fetch]", e)
    }
  }
  function getNametagColor(role) {
    return ROLE_COLORS[role] || ROLE_COLORS["Synapse"]
  }
  function createNametagText(parent, text, color) {
    try {
      var textObj = createObject(zeroVector, identityQuaternion, [1, 1, 1], 5, [0, 0, 0, 0], parent)
      textObj.method("set_name").invoke(Il2Cpp.string("Nametag"))
      if (TextMeshPro3D && !TextMeshPro3D.isNull?.()) {
        var tmp = addComponent(textObj, TextMeshPro3D)
        var font = gettmpfontnocrash()
        if (font && !font.isNull()) {
          tmp.method("set_font").invoke(font)
        }
        tmp.method("set_text").invoke(Il2Cpp.string(text))
        tmp.method("set_fontSize").invoke(0.35)
        tmp.method("set_alignment").invoke(2)
        tmp.method("set_color").invoke(Color.method("RGBToColor").invoke(color[0], color[1], color[2], 1))
        tmp.method("set_margin").invoke([0, 0, 0, 0])
        tmp.method("set_enableWordWrapping").invoke(false)
      } else if (TextMesh && !TextMesh.isNull?.()) {
        var tm = addComponent(textObj, TextMesh)
        var mFont = menuFont()
        if (mFont && !mFont.isNull()) tm.method("set_font").invoke(mFont)
        tm.method("set_text").invoke(Il2Cpp.string(text))
        tm.method("set_characterSize").invoke(0.03)
        tm.method("set.fontSize").invoke(48)
        tm.method("set_alignment").invoke(2)
        tm.method("set_color").invoke(Color.method("RGBToColor").invoke(color[0], color[1], color[2], 1))
      }
      var bgObj = createObject(zeroVector, identityQuaternion, [0.6, 0.14, 0.06], 5, [color[0] * 0.15, color[1] * 0.15, color[2] * 0.15, 0.85], parent)
      bgObj.method("set_name").invoke(Il2Cpp.string("NametagBG"))
      Destroy(getComponent(bgObj, BoxCollider))
      var mr = getComponent(bgObj, MeshRenderer)
      if (mr && !mr.isNull?.()) {
        try { mr.method("set_sharedMaterial").invoke(createFlatMaterial([color[0] * 0.15, color[1] * 0.15, color[2] * 0.15, 0.85])) } catch (_) {}
      }
      return { textObj: textObj, bgObj: bgObj }
    } catch (e) { console.error("[Nametag Create]", e); return null }
  }
  function updateNametagPositions() {
    try {
      var players = getAllNetPlayersList(false)
      var activeNames = {}
      for (var i = 0; i < players.length; i++) {
        try {
          var p = players[i]
          if (!p || p.isNull?.()) continue
          var pName = getPlayerName(p)
          if (!pName) continue
          activeNames[pName.toLowerCase()] = true
          var pTransform = getTransform(p)
          if (!pTransform || pTransform.isNull?.()) continue
          var pPos = pTransform.method("get_position").invoke()
          var tagPos = Vector3.method("op_Addition").invoke(pPos, [0, 0.55, 0])
          var existing = nametagObjects[pName.toLowerCase()]
          if (existing && !existing.root.isNull?.()) {
            getTransform(existing.root).method("set_position").invoke(tagPos)
          } else {
            var roleData = nametagRoles[pName.toLowerCase()]
            var role = roleData ? roleData.role : "Synapse"
            var displayName = roleData ? roleData.displayName : "Synapse Menu"
            var color = getNametagColor(role)
            var root = createObject(tagPos, identityQuaternion, [1, 1, 1], 5, [0, 0, 0, 0], null)
            root.method("set_name").invoke(Il2Cpp.string("Nametag_" + pName))
            var nametag = createNametagText(root, displayName, color)
            if (nametag) {
              nametagObjects[pName.toLowerCase()] = { root: root, text: nametag.textObj, bg: nametag.bgObj, lastUpdate: 0 }
            }
          }
        } catch (_) {}
      }
      for (var key in nametagObjects) {
        if (!activeNames[key]) {
          try {
            var obj = nametagObjects[key]
            if (obj.root && !obj.root.isNull?.()) Destroy(obj.root)
          } catch (_) {}
          delete nametagObjects[key]
        }
      }
    } catch (e) { console.error("[Nametag Update]", e) }
  }
  function destroyAllNametags() {
    for (var key in nametagObjects) {
      try {
        var obj = nametagObjects[key]
        if (obj.root && !obj.root.isNull?.()) Destroy(obj.root)
      } catch (_) {}
    }
    nametagObjects = {}
  }
  function createFlatMaterial(color) {
    try {
      var mat = new Material(Shader.method("Find").invoke(Il2Cpp.string("Standard")))
      mat.method("SetFloat").invoke(Il2Cpp.string("_Mode"), 3)
      mat.method("set_renderQueue").invoke(3000)
      mat.method("SetColor").invoke(Il2Cpp.string("_Color"), Color.method("RGBToColor").invoke(color[0], color[1], color[2], color[3]))
      return mat
    } catch (_) { return null }
  }

  // --- Held Item Helpers ---
  function getPlayerHeldGrabbable(player, handIndex) {
    try {
      var interactor = player.method("GetHandInteractor", 1).invoke(handIndex)
      if (!interactor || interactor.isNull?.()) return null
      var itemAnchor = interactor.field("_itemAnchor").value
      if (!itemAnchor || itemAnchor.isNull?.()) return null
      var grabbable = itemAnchor.method("get_grabbableObject").invoke()
      if (!grabbable || grabbable.isNull?.()) return null
      return grabbable
    } catch (_) { return null }
  }
  function getLocalHeldGrabbable(preferRight) {
    if (preferRight === undefined) preferRight = true
    try {
      var player = NetPlayer.method("get_localPlayer").invoke()
      if (!player || player.isNull?.()) return null
      var first = preferRight ? 1 : 0
      var second = preferRight ? 0 : 1
      return getPlayerHeldGrabbable(player, first) || getPlayerHeldGrabbable(player, second)
    } catch (_) { return null }
  }
  function tryCallNames(obj, names, parameterCount) {
    if (!obj || obj.isNull?.()) return false
    var args = []
    for (var i = 3; i < arguments.length; i++) args.push(arguments[i])
    for (var ni = 0; ni < names.length; ni++) {
      try {
        var method = parameterCount >= 0 ? obj.class.method(names[ni], parameterCount) : obj.class.method(names[ni])
        if (method) { method.invoke.apply(method, args); return true }
      } catch (_) {}
      try {
        var method2 = parameterCount >= 0 ? obj.method(names[ni], parameterCount) : obj.method(names[ni])
        if (method2) { method2.invoke.apply(method2, args); return true }
      } catch (_) {}
    }
    return false
  }

  // --- Mod Helpers ---
  function playerIsLocal(player) {
    try { return player.method("get_IsMine").invoke() } catch (_) { return false }
  }
  function getAllNetPlayersList(includeLocal) {
    if (includeLocal === undefined) includeLocal = true
    var players = []
    try {
      var playerDict = NetPlayer.field("playerIDToNetPlayer").value
      if (!playerDict || playerDict.isNull()) return players
      var vals = playerDict.method("get_Values").invoke()
      var en = vals.method("GetEnumerator").invoke()
      while (en.method("MoveNext").invoke()) {
        var p = en.method("get_Current").invoke()
        if (!p || p.isNull?.()) continue
        if (!includeLocal && playerIsLocal(p)) continue
        players.push(p)
      }
    } catch (_) {}
    return players
  }
  function getLocalPlayer() {
    try { return NetPlayer.method("get_localPlayer").invoke() } catch (_) { return null }
  }
  function smoothNumber(current, target, amount) {
    return current + (target - current) * amount
  }
  function smoothVec3(state, target, amount) {
    if (!amount) amount = 0.18
    state[0] = smoothNumber(state[0], target[0], amount)
    state[1] = smoothNumber(state[1], target[1], amount)
    state[2] = smoothNumber(state[2], target[2], amount)
    return state
  }
  let physicsRaycastAllVec4 = null
  let physicsRaycastOutVec4 = null
  let physicsRaycastOutVec5 = null
  function doGunRaycast(overrideLayerMask) {
    var handTransform = getTransform(righthand ? leftHandTransform : rightHandTransform)
    var handPos = handTransform.method("get_position").invoke()
    var fwd = handTransform.method("get_forward").invoke()
    var startPos = Vector3.method("op_Addition").invoke(handPos, Vector3.method("op_Multiply").invoke(fwd, 0.08))
    var layerMask = overrideLayerMask !== undefined ? overrideLayerMask : -1
    var bestDist = 999999
    var bestPoint = null
    var bestCollider = null
    try {
      if (!physicsRaycastAllVec4) {
        physicsRaycastAllVec4 = Physics.method("RaycastAll").overload(
          "UnityEngine.Vector3",
          "UnityEngine.Vector3",
          "System.Single",
          "System.Int32"
        )
      }
      var hits = physicsRaycastAllVec4.invoke(startPos, fwd, 512.0, layerMask)
      if (hits && !hits.isNull() && hits.length > 0) {
        for (var i = 0; i < hits.length; i++) {
          try {
            var hit = hits.get(i)
            if (!hit || hit.isNull?.()) continue
            var hitCollider = hit.method("get_collider").invoke()
            if (!hitCollider || hitCollider.isNull()) continue
            var hitPoint = hit.method("get_point").invoke()
            var dist = Vector3.method("Distance").invoke(startPos, hitPoint)
            if (dist < 0.02 || dist >= bestDist) continue
            bestDist = dist
            bestPoint = hitPoint
            bestCollider = hitCollider
          } catch (_) {}
        }
      }
    } catch (e) { console.error("[Gun RaycastAll]", e) }
    if (bestPoint) {
      return { hit: true, point: bestPoint, collider: bestCollider }
    }
    return { hit: false, point: Vector3.method("op_Addition").invoke(startPos, Vector3.method("op_Multiply").invoke(fwd, 512)), collider: null }
  }
  function resolveGunTargetPlayer() {
    var rayData = doGunRaycast()
    if (rayData.collider && !rayData.collider.isNull?.()) {
      try {
        var hitGO = rayData.collider.method("get_gameObject").invoke()
        if (hitGO && !hitGO.isNull()) {
          var hitPlayer = hitGO.method("GetComponentInParent", 0).inflate(NetPlayer).invoke()
          if (hitPlayer && !hitPlayer.isNull()) return hitPlayer
        }
      } catch (_) {}
    }
    return null
  }
  function findNearestNonLocalPlayer(fromPos) {
    var players = getAllNetPlayersList(false)
    var best = null
    var bestDist = 999999
    for (var i = 0; i < players.length; i++) {
      try {
        var p = players[i]
        if (!p || p.isNull?.()) continue
        var pTransform = getTransform(p)
        if (!pTransform || pTransform.isNull?.()) continue
        var pPos = pTransform.method("get_position").invoke()
        var dist = Vector3.method("Distance").invoke(fromPos, pPos)
        if (dist < bestDist) {
          bestDist = dist
          best = p
        }
      } catch (_) {}
    }
    return best
  }
  function getGunModTarget() {
    if (gunLockedPlayer && !gunLockedPlayer.isNull?.()) return gunLockedPlayer
    var target = resolveGunTargetPlayer()
    if (target && !target.isNull?.() && !playerIsLocal(target)) return target
    return null
  }
  function getGunModAimPoint() {
    if (gunLockedPos) return gunLockedPos
    return doGunRaycast().point
  }
  function tryRPCAllPlayers(rpcName, args) {
    var players = getAllNetPlayersList(false)
    for (var i = 0; i < players.length; i++) {
      try {
        var method = players[i].method(rpcName, args.length)
        method.invoke.apply(method, args)
      } catch (_) {}
    }
  }

  // --- Container Freedom Hooks (from Dabeans + Cherry) ---
  function installContainerFreedom() {
    if (containerFreedomInstalled) return
    try {
      const cls = AssemblyCSharp.class("AnimalCompany.GameplayItemState")
      const methods = ["AllowAddToBag"]
      for (const m of methods) {
        try { cls.method(m).implementation = function() { return true } } catch(_) {}
      }
      const getterMethods = ["get_isBag", "get_baseCapacity", "get_totalCurrCapacity", "get_maxCapacity", "get_canBeStashed"]
      for (const m of getterMethods) {
        try {
          const method = cls.method(m)
          if (m === "get_baseCapacity" || m === "get_maxCapacity") {
            method.implementation = function() { return 999 }
          } else {
            method.implementation = function() { return true }
          }
        } catch(_) {}
      }
      containerFreedomInstalled = true
      console.log("[ContainerFreedom] All bags, max capacity")
    } catch (e) { console.error("[ContainerFreedom]", e) }
  }

  // --- RPC Protection (expanded to 27+ RPCs) ---
  function installRPCProtection() {
    if (rpcProtectInstalled) return
    const hostileRPCs = [
      "RPC_PlayerHit", "RPC_PlayerStun", "RPC_AddForce", "RPC_Teleport",
      "RPC_SetColor", "RPC_KillPlayer", "RPC_KickPlayer", "RPC_BanPlayer",
      "RPC_RemovePlayer", "RPC_DisconnectPlayer", "RPC_SetHealth",
      "RPC_DamagePlayer", "RPC_ForceDisconnect", "RPC_RespawnPlayer",
      "RPC_SetPosition", "RPC_ApplyKnockback", "RPC_FreezePlayer",
      "RPC_MutePlayer", "RPC_ToggleMute", "RPC_StunAll",
      "RPC_SetRadioActive", "RPC_SetJellyEffect",
      "RPC_SetSqueakyVoiceEnabled", "RPC_SetMuffledVoiceEnabled",
      "RPC_AttachTo", "RPC_DetachFromAttachable", "RPC_AttachToAttachable"
    ]
    try {
      const cls = AssemblyCSharp.class("AnimalCompany.NetPlayer")
      const methods = cls.methods
      var blocked = 0
      for (const m of methods) {
        try {
          const name = m.name.toString()
          if (hostileRPCs.some(h => name.includes(h))) {
            m.implementation = function() {
              console.log("[RPCProtect] Blocked: " + name)
            }
            blocked++
          }
        } catch(_) {}
      }
      rpcProtectInstalled = true
      console.log("[RPCProtection] Installed, blocked " + blocked + " hostile RPCs")
    } catch (e) { console.error("[RPCProtection]", e) }
  }

  // --- Sell Value Multiplier ---
  function installSellValueMult() {
    try {
      const cls = AssemblyCSharp.class("AnimalCompany.GameplayItemState")
      const methods = ["get_sellValue", "get_SellValue", "GetSellValue"]
      for (const m of methods) {
        try {
          const method = cls.method(m)
          method.implementation = function() {
            const base = method.invoke()
            return base * sellValueMult
          }
        } catch(_) {}
      }
      console.log("[SellValue] Multiplier: " + sellValueMult)
    } catch (e) { console.error("[SellValue]", e) }
  }

  // --- Arena Item Killer Bypass ---
  function installArenaKillerBypass() {
    try {
      const cls = AssemblyCSharp.class("AnimalCompany.ArenaItemKiller")
      cls.method("OnTriggerEnter").implementation = function() {}
      cls.method("set_enabled").implementation = function() {}
      console.log("[ArenaKiller] Bypass active")
    } catch (e) { console.error("[ArenaKiller]", e) }
  }

  // --- Spam SFX Networked (from Cherry) ---
  var sfxSheetRef = null
  function spamSFXNetwork() {
    if (time < spamSfxDelay) return
    spamSfxDelay = time + 0.1
    try {
      if (!sfxSheetRef || sfxSheetRef.isNull()) {
        try {
          var sfxCls = AssemblyCSharp.class("AnimalCompany.RandomSFXSheet")
          sfxSheetRef = sfxCls.method("get_instance").invoke()
        } catch(_) { return }
      }
      if (!sfxSheetRef || sfxSheetRef.isNull()) return
      var len = sfxSheetRef.method("GetLength").invoke()
      if (len <= 0) return
      var idx = ((spamSfxIndex % len) + len) % len
      var clip = sfxSheetRef.method("Get").invoke(idx)
      if (!clip || clip.isNull()) return
      var pos = getTransform(righthand ? rightHandTransform : leftHandTransform).method("get_position").invoke()
      var sfxMgr = AssemblyCSharp.class("AnimalCompany.SfxManager")
      sfxMgr.method("PlaySFXNetworked", 4).invoke(clip, pos, 1, 0)
      spamSfxIndex++
    } catch (e) { console.error("[SpamSFX]", e) }
  }

  // --- RPC Chaos Loop (from Dabeans) ---
  var frameCount = 0
  function rpcChaosLoop() {
    frameCount++
    if (frameCount % 20 !== 0) return
    try {
      var dmgNull = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke()
      var players = getAllNetPlayersList(false)
      var effects = ["force", "stun", "hit", "vfx", "color", "tp"]
      var vfxs = [174, 180, 33, 42, 183, 44]
      for (var i = 0; i < players.length; i++) {
        var player = players[i]
        if (!player || player.isNull?.() || playerIsLocal(player)) continue
        var effect = effects[Math.floor(Math.random() * effects.length)]
        try {
          var pos = getTransform(player).method("get_position").invoke()
          if (effect === "force") {
            player.method("RPC_AddForce").invoke([(Math.random()-0.5)*2000, 1200, (Math.random()-0.5)*2000])
          } else if (effect === "stun") {
            player.method("RPC_PlayerStun").invoke(pos, 5, 3, 1)
          } else if (effect === "hit") {
            player.method("RPC_PlayerHit").invoke(10, pos, dmgNull)
          } else if (effect === "vfx") {
            player.method("RPC_PlayVFX").invoke(vfxs[Math.floor(Math.random() * vfxs.length)], pos)
          } else if (effect === "color") {
            player.method("RPC_SetColor").invoke(Math.random(), Math.random(), Math.random(), 1)
          } else if (effect === "tp") {
            player.method("RPC_Teleport").invoke([
              pos.field("x").value + (Math.random()-0.5)*20,
              pos.field("y").value + 5,
              pos.field("z").value + (Math.random()-0.5)*20
            ])
          }
        } catch(_) {}
      }
    } catch(_) {}
  }

  // --- Get Player Info Gun (from Dabeans) ---
  function getPlayerInfoGun() {
    try {
      var target = getGunModTarget()
      if (!target || target.isNull?.()) { console.log("[PlayerInfo] No target"); return }
      console.log("\n=== PLAYER INFO ===")
      var aliasMethods = ["get_Alias", "get_alias", "get_DisplayName", "get_PlayerName"]
      for (var i = 0; i < aliasMethods.length; i++) {
        try {
          var alias = target.method(aliasMethods[i]).invoke()
          if (alias && !alias.isNull?.()) console.log("  Alias: " + alias.toString())
        } catch(_) {}
      }
      var idMethods = ["get_PlayerID", "get_playerID", "get_ActorNumber", "get_InternalID"]
      for (var i = 0; i < idMethods.length; i++) {
        try {
          var id = target.method(idMethods[i]).invoke()
          console.log("  " + idMethods[i] + ": " + id)
        } catch(_) {}
      }
      var pos = getTransform(target).method("get_position").invoke()
      console.log("  Position: " + readVec3Components(pos))
      console.log("  IsLocal: " + playerIsLocal(target))
      console.log("====================")
      sendNotification("Player info dumped to console", false, 3)
    } catch (e) { console.error("[PlayerInfoGun]", e) }
  }

  // --- Dev Mode (from Dabeans) ---
  function enableDevMode() {
    try {
      var cls = AssemblyCSharp.class("AnimalCompany.App")
      var state = cls.method("get_state").invoke()
      var devMode = state.method("get_devMode").invoke()
      devMode.method("set_value").invoke(true)
      console.log("[DevMode] Enabled")
    } catch (e) { console.error("[DevMode]", e) }
  }

  // --- Grant All Stash Slots (from Dabeans) ---
  function grantAllStashSlots() {
    try {
      var cls = AssemblyCSharp.class("AnimalCompany.App")
      var state = cls.method("get_state").invoke()
      var user = state.method("get_user").invoke()
      var inventory = user.method("get_inventory").invoke()
      var slots = inventory.method("get_stashSlots").invoke()
      slots.method("set_value").invoke(999)
      console.log("[StashSlots] All slots granted")
    } catch (e) { console.error("[StashSlots]", e) }
  }

  // --- Fishing Hooks (from Cherry) ---
  function installFishingHooks() {
    if (fishingHooksInstalled) return
    try {
      var cls = AssemblyCSharp.class("AnimalCompany.Fishing.GameplayFishConfig")
      cls.method("GetRandomFishSize").implementation = function() { return 127 }
      fishingHooksInstalled = true
      console.log("[Fishing] Max size always")
    } catch (e) { console.error("[Fishing]", e) }
  }

  // --- Heart Gun Infinite Charge (from Cherry) ---
  function installHeartGunHooks() {
    if (heartGunHooksInstalled) return
    try {
      var cls = AssemblyCSharp.class("AnimalCompany.HeartGun")
      var methods = ["get_ammo", "get_Ammo", "get_charge", "get_Charge", "get_currentCharge", "get_maxAmmo", "get_maxCharge"]
      for (var i = 0; i < methods.length; i++) {
        try { cls.method(methods[i]).implementation = function() { return 999 } } catch(_) {}
      }
      heartGunHooksInstalled = true
      console.log("[HeartGun] Infinite charge")
    } catch (e) { console.error("[HeartGun]", e) }
  }

  // --- Mining Laser Hooks (from Cherry) ---
  function installMiningLaserHooks() {
    if (miningLaserHooksInstalled) return
    try {
      var cls = AssemblyCSharp.class("AnimalCompany.MiningLaser")
      try { cls.method("get_fuel").implementation = function() { return 999 } } catch(_) {}
      try { cls.method("get__fuel").implementation = function() { return 999 } } catch(_) {}
      try { cls.method("get__didOverheat").implementation = function() { return false } } catch(_) {}
      try { cls.method("get_didOverheat").implementation = function() { return false } } catch(_) {}
      miningLaserHooksInstalled = true
      console.log("[MiningLaser] Infinite fuel + no overheat")
    } catch (e) { console.error("[MiningLaser]", e) }
  }

  // --- Salmon Cannon Any Item (from Cherry) ---
  function installSalmonCannonHook() {
    if (salmonCannonHookInstalled) return
    try {
      var cls = AssemblyCSharp.class("AnimalCompany.SalmonCannon")
      cls.method("OnTriggerEnter").implementation = function(other) {
        try {
          var go = other.method("get_gameObject").invoke()
          if (go && !go.isNull?.()) {
            var rb = go.method("GetComponent", 0).inflate(Rigidbody).invoke()
            if (rb && !rb.isNull?.()) {
              var fwd = getTransform(this).method("get_forward").invoke()
              rb.method("AddForce").invoke(Vector3.method("op_Multiply").invoke(fwd, 50))
            }
          }
        } catch(_) {}
      }
      salmonCannonHookInstalled = true
      console.log("[SalmonCannon] Any item launches")
    } catch (e) { console.error("[SalmonCannon]", e) }
  }

  // --- Selling Machine Spiral (from Dabeans + Cherry) ---
  function spawnSellingSpiral() {
    try {
      var headPos = getTransform(headCollider).method("get_position").invoke()
      var count = 60
      for (var i = 0; i < count; i++) {
        var t = i / count
        var angle = t * Math.PI * 2 * 4
        var y = (t - 0.5) * 6
        var r = 7 * (1 - Math.abs(t - 0.5) * 2)
        var spawnPos = [
          headPos.field("x").value + Math.cos(angle) * r,
          headPos.field("y").value + y,
          headPos.field("z").value + Math.sin(angle) * r
        ]
        var obj = spawnNetworkPrefab("ItemSellingMachineController", spawnPos, identityQuaternion)
        if (obj && !obj.isNull?.()) {
          try { obj.method("RequestStateAuthority").invoke() } catch(_) {}
          sellingMachineObjs.push(obj)
        }
      }
      sendNotification("Spawned " + count + " selling machines", false, 3)
    } catch (e) { console.error("[SellingSpiral]", e) }
  }
  function clearSellingMachines() {
    for (var i = 0; i < sellingMachineObjs.length; i++) {
      var obj = sellingMachineObjs[i]
      if (!obj || obj.isNull?.()) continue
      try { obj.method("get_Runner").invoke().method("Despawn").invoke(obj) } catch(_) {}
    }
    sellingMachineObjs = []
  }

  // --- Selling Machine Dome (from Cherry) ---
  function spawnSellingDome() {
    try {
      var headPos = getTransform(headCollider).method("get_position").invoke()
      var layers = [
        { count: 3, elevation: Math.PI/2, radius: 0 },
        { count: 24, elevation: Math.PI*5/12, radius: 20 },
        { count: 42, elevation: Math.PI/3, radius: 30 },
        { count: 54, elevation: Math.PI/6, radius: 42 },
        { count: 48, elevation: 0, radius: 45 },
        { count: 42, elevation: -Math.PI/6, radius: 42 },
        { count: 27, elevation: -Math.PI/3, radius: 30 }
      ]
      for (var l = 0; l < layers.length; l++) {
        var layer = layers[l]
        for (var i = 0; i < layer.count; i++) {
          var angle = (Math.PI * 2 / layer.count) * i
          var spawnPos = [
            headPos.field("x").value + Math.cos(angle) * layer.radius,
            headPos.field("y").value + Math.sin(layer.elevation) * 45,
            headPos.field("z").value + Math.sin(angle) * layer.radius
          ]
          var obj = spawnNetworkPrefab("ItemSellingMachineController", spawnPos, identityQuaternion)
          if (obj && !obj.isNull?.()) {
            try { obj.method("RequestStateAuthority").invoke() } catch(_) {}
            sellingMachineObjs.push(obj)
          }
        }
      }
      sendNotification("Spawned selling machine dome", false, 3)
    } catch (e) { console.error("[SellingDome]", e) }
  }

  // --- Shooter Types (from Cherry) ---
  var shooterNames = ["Egg Shooter", "Balloon Shooter", "Flare Shooter", "Robot Dog Shooter", "All-in-One Shooter"]
  var shooterPrefabs = [
    "item_egg",
    "item_balloon",
    "item_flaregun",
    "RobotDog",
    "item_rpg"
  ]

  // --- Buttons Structure ---
  const buttons = [
    // Category 0: Main Menu
    [
      new ButtonInfo({
        buttonText: "Settings",
        method: () => { currentCategory = 2; currentPage = 0 },
        isTogglable: false,
        toolTip: "Menu settings."
      }),
      new ButtonInfo({
        buttonText: "Spawning",
        method: () => { currentCategory = 3; currentPage = 0 },
        isTogglable: false,
        toolTip: "Spawn items, mobs, and prefabs."
      }),
      new ButtonInfo({
        buttonText: "Movement",
        method: () => { currentCategory = 4; currentPage = 0 },
        isTogglable: false,
        toolTip: "Fly, platforms, arms, noclip."
      }),
      new ButtonInfo({
        buttonText: "Gun Mods",
        method: () => { currentCategory = 5; currentPage = 0 },
        isTogglable: false,
        toolTip: "All gun-based mods."
      }),
      new ButtonInfo({
        buttonText: "Player Mods",
        method: () => { currentCategory = 6; currentPage = 0 },
        isTogglable: false,
        toolTip: "Self player mods."
      }),
      new ButtonInfo({
        buttonText: "Overpowered",
        method: () => { currentCategory = 7; currentPage = 0 },
        isTogglable: false,
        toolTip: "OP mods and exploits."
      }),
      new ButtonInfo({
        buttonText: "RPC Mods",
        method: () => { currentCategory = 9; currentPage = 0 },
        isTogglable: false,
        toolTip: "RPC-based chaos mods."
      }),
      new ButtonInfo({
        buttonText: "Item Mods",
        method: () => { currentCategory = 10; currentPage = 0 },
        isTogglable: false,
        toolTip: "Item manipulation and dupe."
      }),
      new ButtonInfo({
        buttonText: "Mob Mods",
        method: () => { currentCategory = 11; currentPage = 0 },
        isTogglable: false,
        toolTip: "Control and manipulate mobs."
      }),
      new ButtonInfo({
        buttonText: "Extra Guns",
        method: () => { currentCategory = 12; currentPage = 0 },
        isTogglable: false,
        toolTip: "More gun mods from other menus."
      }),
      new ButtonInfo({
        buttonText: "Nametags",
        method: () => { currentCategory = 13; currentPage = 0 },
        isTogglable: false,
        toolTip: "Nametag settings and roles."
      }),
      new ButtonInfo({
        buttonText: "ID Browser",
        method: () => { currentCategory = 8; currentPage = 0 },
        isTogglable: false,
        toolTip: "Browse Mob, Item, and VFX IDs."
      }),
      new ButtonInfo({
        buttonText: "Search",
        method: () => { currentCategory = 44; currentPage = 0; searchQuery = "" },
        isTogglable: false,
        toolTip: "Search all mods by name."
      })
    ],
    // Category 1: Navigation Actions
    [
      new ButtonInfo({
        buttonText: "Disconnect",
        method: () => {
          try {
            const NManagerInst = NManager.method("get_instance").invoke()
            if (!NManagerInst || NManagerInst.isNull()) return
            NManagerInst.method("TryShutdownAndCancelConnecting").invoke()
          } catch (e) { console.error("[Disconnect]", e) }
        },
        isTogglable: false,
        toolTip: "Disconnects from current game session."
      }),
      new ButtonInfo({
        buttonText: "PreviousPage",
        method: () => {
          const lastPage = Math.ceil(buttons[currentCategory].length / 8) - 1
          currentPage--
          if (currentPage < 0) currentPage = lastPage
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "NextPage",
        method: () => {
          const lastPage = Math.ceil(buttons[currentCategory].length / 8) - 1
          currentPage++
          currentPage %= lastPage + 1
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "GlobalReturn",
        method: () => { currentCategory = 0; currentPage = 0 },
        isTogglable: false,
        toolTip: "Returns to main category page."
      })
    ],
    // Category 2: Settings
    [
      new ButtonInfo({
        buttonText: "Recenter Menu",
        method: () => { recenterMenu() },
        isTogglable: false,
        toolTip: "Resets menu position."
      }),
      new ButtonInfo({
        buttonText: "Toggle Hand",
        method: () => { righthand = !righthand; reloadMenu() },
        isTogglable: false,
        toolTip: "Swaps controller hand."
      }),
      new ButtonInfo({
        buttonText: "Scale Up",
        method: () => { menuscale = Math.min(1.5, menuscale + 0.05); reloadMenu() },
        isTogglable: false,
        toolTip: "Increases menu scale."
      }),
      new ButtonInfo({
        buttonText: "Scale Down",
        method: () => { menuscale = Math.max(0.4, menuscale - 0.05); reloadMenu() },
        isTogglable: false,
        toolTip: "Decreases menu scale."
      }),
      new ButtonInfo({
        buttonText: "SFX ID +",
        method: () => { spamSfxIndex++; sendNotification("SFX ID: " + spamSfxIndex, false) },
        isTogglable: false,
        toolTip: "Increment SFX ID for spam."
      }),
      new ButtonInfo({
        buttonText: "SFX ID -",
        method: () => { spamSfxIndex = Math.max(0, spamSfxIndex - 1); sendNotification("SFX ID: " + spamSfxIndex, false) },
        isTogglable: false,
        toolTip: "Decrement SFX ID for spam."
      }),
      new ButtonInfo({
        buttonText: "Cycle Shooter",
        method: () => {
          selectedShooterIndex = (selectedShooterIndex + 1) % shooterNames.length
          sendNotification("Shooter: " + shooterNames[selectedShooterIndex], false)
        },
        isTogglable: false,
        toolTip: "Cycle spawn shooter type."
      })
    ],
    // Category 3: Spawning
    [
      new ButtonInfo({
        buttonText: "Spawn Selected",
        method: () => {
          try {
            if (mobList.length === 0) buildMobList()
            if (itemList.length === 0) buildItemList()
            var targetHand = righthand ? leftHandTransform : rightHandTransform
            var handPos = targetHand.method("get_position").invoke()
            var forward = targetHand.method("get_forward").invoke()
            var spawnPos = Vector3.method("op_Addition").invoke(handPos, Vector3.method("op_Multiply").invoke(forward, 2.0))
            if (selectedIdType === 0) {
              var entry = mobList[selectedMobIndex]
              if (entry) { spawnMobAtPos(entry, spawnPos, identityQuaternion); sendNotification("Spawned " + entry.name, false) }
            } else if (selectedIdType === 1) {
              var entry = itemList[selectedItemIndex]
              if (entry) {
                var spawned = spawnNetworkPrefab(entry.name, spawnPos, identityQuaternion)
                if (spawned && !spawned.isNull?.()) sendNotification("Spawned " + entry.name, false)
                else sendNotification("Failed to spawn!", true)
              }
            } else { sendNotification("VFX cannot be spawned", true) }
          } catch (e) { console.error("[Spawn]", e) }
        },
        isTogglable: false,
        toolTip: "Spawns the currently selected ID."
      }),
      new ButtonInfo({
        buttonText: "Spawn Items Gun",
        enableMethod: () => { sendNotification("Spawn Items Gun ON", false) },
        disableMethod: () => { sendNotification("Spawn Items Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (itemList.length === 0) buildItemList()
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 300
            var aimPoint = getGunModAimPoint()
            var entry = itemList[selectedItemIndex]
            if (entry) {
              var spawned = spawnNetworkPrefab(entry.name, aimPoint, identityQuaternion)
              if (spawned && !spawned.isNull?.()) sendNotification("Spawned " + entry.name, false)
            }
          } catch (e) { console.error("[SpawnGun]", e) }
        },
        isTogglable: true,
        toolTip: "Toggle on, grip+trigger to spawn item at aim point."
      }),
      new ButtonInfo({
        buttonText: "Spawn Mob Gun",
        enableMethod: () => { sendNotification("Spawn Mob Gun ON", false) },
        disableMethod: () => { sendNotification("Spawn Mob Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (mobList.length === 0) buildMobList()
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 500
            var aimPoint = getGunModAimPoint()
            var entry = mobList[selectedMobIndex]
            if (entry) {
              var result = spawnMobAtPos(entry, aimPoint, identityQuaternion)
              if (result && !result.isNull?.()) {
                sendNotification("Spawned " + entry.name, false)
              } else {
                sendNotification("Spawn failed!", true)
              }
            }
          } catch (e) { console.error("[MobGun]", e) }
        },
        isTogglable: true,
        toolTip: "Toggle on, grip+trigger to spawn mob at aim point."
      }),
      new ButtonInfo({
        buttonText: "Show Selected",
        method: () => {
          if (selectedIdType === 0 && mobList[selectedMobIndex]) sendNotification("Mob: " + mobList[selectedMobIndex].name, false, 3)
          else if (selectedIdType === 1 && itemList[selectedItemIndex]) sendNotification("Item: " + itemList[selectedItemIndex].name, false, 3)
          else if (vfxList[selectedVFXIndex]) sendNotification("VFX: " + vfxList[selectedVFXIndex].name + " (" + vfxList[selectedVFXIndex].id + ")", false, 3)
        },
        isTogglable: false,
        toolTip: "Shows currently selected ID info."
      })
    ],
    // Category 4: Movement
    [
      new ButtonInfo({
        buttonText: "Fly",
        enableMethod: () => { flyEnabled = true; flyVelocity = [0, 0, 0]; sendNotification("Fly enabled!", false) },
        disableMethod: () => { flyEnabled = false; sendNotification("Fly disabled!", false) },
        method: () => {
          if (!flyEnabled) return
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) { flyVelocity = smoothVec3(flyVelocity, [0, 0, 0], 0.3); return }
            var handTransform = getTransform(righthand ? leftHandTransform : rightHandTransform)
            var fwd = handTransform.method("get_forward").invoke()
            var fwdArr = readVec3Components(fwd)
            var target = [fwdArr[0] * 1.5, fwdArr[1] * 1.5, fwdArr[2] * 1.5]
            flyVelocity = smoothVec3(flyVelocity, target, 0.18)
            var localPlayer = getLocalPlayer()
            if (localPlayer && !localPlayer.isNull?.()) {
              localPlayer.method("RPC_AddForce").invoke(flyVelocity)
            }
          } catch (e) { console.error("[Fly]", e) }
        },
        isTogglable: true,
        toolTip: "Fly with grip+trigger. Fist forward to fly."
      }),
      new ButtonInfo({
        buttonText: "Platforms",
        enableMethod: () => { platformsEnabled = true; platformObjects = []; sendNotification("Platforms enabled!", false) },
        disableMethod: () => {
          platformsEnabled = false
          for (var i = 0; i < platformObjects.length; i++) {
            try { if (platformObjects[i] && !platformObjects[i].isNull?.()) Destroy(platformObjects[i]) } catch (_) {}
          }
          platformObjects = []
          sendNotification("Platforms disabled!", false)
        },
        method: () => {
          if (!platformsEnabled) return
          try {
            var hands = [leftHandTransform, rightHandTransform]
            var grips = [leftGrab, rightGrab]
            for (var h = 0; h < 2; h++) {
              if (grips[h]) {
                var handTf = getTransform(hands[h])
                var pos = handTf.method("get_position").invoke()
                var existing = false
                for (var i = 0; i < platformObjects.length; i++) {
                  try {
                    var pTf = getTransform(platformObjects[i])
                    var pPos = pTf.method("get_position").invoke()
                    if (Vector3.method("Distance").invoke(pPos, pos) < 0.3) { existing = true; break }
                  } catch (_) {}
                }
                if (!existing) {
                  var plat = createObject(pos, identityQuaternion, [0.2, 0.02, 0.2], 1, [0.3, 0.1, 0.5, 1], null, false)
                  platformObjects.push(plat)
                }
              } else {
                for (var i = platformObjects.length - 1; i >= 0; i--) {
                  try { if (platformObjects[i] && !platformObjects[i].isNull?.()) Destroy(platformObjects[i]) } catch (_) {}
                }
                platformObjects = []
              }
            }
          } catch (e) { console.error("[Platforms]", e) }
        },
        isTogglable: true,
        toolTip: "Platforms under hands when grip held."
      }),
      new ButtonInfo({
        buttonText: "Long Arms",
        method: () => {
          var scales = [[1.25,1.25,1.25], [1.75,1.75,1.75], [2,2,2], [3,3,3], [1,1,1]]
          armScaleIndex = (armScaleIndex + 1) % scales.length
          var s = scales[armScaleIndex]
          try {
            var localPlayer = getLocalPlayer()
            if (localPlayer && !localPlayer.isNull?.()) {
              var tf = getTransform(localPlayer)
              if (tf && !tf.isNull?.()) tf.method("set_localScale").invoke(s)
            }
          } catch (_) {}
          sendNotification("Arm scale: " + s[0] + "x", false)
        },
        isTogglable: false,
        toolTip: "Cycle arm length: 1.25x, 1.75x, 2x, 3x, reset."
      }),
      new ButtonInfo({
        buttonText: "Orbit Players",
        enableMethod: () => { orbitPlayersEnabled = true; orbitAngle = 0; sendNotification("Orbit on!", false) },
        disableMethod: () => { orbitPlayersEnabled = false; sendNotification("Orbit off!", false) },
        method: () => {
          if (!orbitPlayersEnabled) return
          try {
            var localPlayer = getLocalPlayer()
            if (!localPlayer || localPlayer.isNull?.()) return
            var myTf = getTransform(localPlayer)
            var myPos = myTf.method("get_position").invoke()
            var players = getAllNetPlayersList(false)
            orbitAngle += deltaTime * 1.85
            for (var i = 0; i < players.length; i++) {
              try {
                var angle = orbitAngle + (i * (Math.PI * 2 / Math.max(players.length, 1)))
                var offset = [Math.cos(angle) * 3.5, 1.5, Math.sin(angle) * 3.5]
                var targetPos = Vector3.method("op_Addition").invoke(myPos, offset)
                players[i].method("RPC_Teleport").invoke(targetPos)
              } catch (_) {}
            }
          } catch (e) { console.error("[Orbit]", e) }
        },
        isTogglable: true,
        toolTip: "Orbit all players around you."
      }),
      new ButtonInfo({
        buttonText: "Noclip",
        enableMethod: () => { noclipEnabled = true; sendNotification("Noclip ON", false) },
        disableMethod: () => { noclipEnabled = false; sendNotification("Noclip OFF", false) },
        method: () => {
          if (!noclipEnabled) return
          try {
            var localPlayer = getLocalPlayer()
            if (!localPlayer || localPlayer.isNull?.()) return
            if (!leftGrab && !rightGrab) return
            var handTf = getTransform(righthand ? rightHandTransform : leftHandTransform)
            var fwd = handTf.method("get_forward").invoke()
            var fwdArr = readVec3Components(fwd)
            var speed = 0.08
            var pos = readVec3Components(getTransform(localPlayer).method("get_position").invoke())
            var newPos = [pos[0] + fwdArr[0] * speed, pos[1] + fwdArr[1] * speed, pos[2] + fwdArr[2] * speed]
            localPlayer.method("RPC_Teleport").invoke(newPos)
          } catch (e) { console.error("[Noclip]", e) }
        },
        isTogglable: true,
        toolTip: "Phase through walls. Grip to move."
      }),
      new ButtonInfo({
        buttonText: "Speed Boost",
        enableMethod: () => { speedBoostEnabled = true; try { getLocalPlayer().method("set_moveSpeed").invoke(20.0) } catch(_){} sendNotification("Speed Boost ON", false) },
        disableMethod: () => { speedBoostEnabled = false; try { getLocalPlayer().method("set_moveSpeed").invoke(1.0) } catch(_){} sendNotification("Speed Boost OFF", false) },
        isTogglable: true,
        toolTip: "20x movement speed."
      }),
      new ButtonInfo({
        buttonText: "Fast Fly",
        enableMethod: () => { fastFlyEnabled = true; flyVelocity = [0, 0, 0]; sendNotification("Fast Fly ON", false) },
        disableMethod: () => { fastFlyEnabled = false; sendNotification("Fast Fly OFF", false) },
        method: () => {
          if (!fastFlyEnabled) return
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) { flyVelocity = smoothVec3(flyVelocity, [0, 0, 0], 0.3); return }
            var handTf = getTransform(righthand ? leftHandTransform : rightHandTransform)
            var fwdArr = readVec3Components(handTf.method("get_forward").invoke())
            var target = [fwdArr[0] * 2.5, fwdArr[1] * 2.5, fwdArr[2] * 2.5]
            flyVelocity = smoothVec3(flyVelocity, target, 0.12)
            var localPlayer = getLocalPlayer()
            if (localPlayer && !localPlayer.isNull?.()) localPlayer.method("RPC_AddForce").invoke(flyVelocity)
          } catch (e) { console.error("[FastFly]", e) }
        },
        isTogglable: true,
        toolTip: "Faster fly with grip+trigger."
      }),
      new ButtonInfo({
        buttonText: "Super Fast Fly",
        enableMethod: () => { superFastFlyEnabled = true; flyVelocity = [0, 0, 0]; sendNotification("Super Fast Fly ON", false) },
        disableMethod: () => { superFastFlyEnabled = false; sendNotification("Super Fast Fly OFF", false) },
        method: () => {
          if (!superFastFlyEnabled) return
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) { flyVelocity = smoothVec3(flyVelocity, [0, 0, 0], 0.3); return }
            var handTf = getTransform(righthand ? leftHandTransform : rightHandTransform)
            var fwdArr = readVec3Components(handTf.method("get_forward").invoke())
            var target = [fwdArr[0] * 4.0, fwdArr[1] * 4.0, fwdArr[2] * 4.0]
            flyVelocity = smoothVec3(flyVelocity, target, 0.16)
            var localPlayer = getLocalPlayer()
            if (localPlayer && !localPlayer.isNull?.()) localPlayer.method("RPC_AddForce").invoke(flyVelocity)
          } catch (e) { console.error("[SuperFastFly]", e) }
        },
        isTogglable: true,
        toolTip: "Extremely fast fly with grip+trigger."
      }),
      new ButtonInfo({
        buttonText: "Joystick Fly",
        enableMethod: () => { joystickFlyEnabled = true; joystickFlyVelocity = [0, 0, 0]; sendNotification("Joystick Fly ON", false) },
        disableMethod: () => { joystickFlyEnabled = false; sendNotification("Joystick Fly OFF", false) },
        method: () => {
          if (!joystickFlyEnabled) return
          try {
            var localPlayer = getLocalPlayer()
            if (!localPlayer || localPlayer.isNull?.()) return
            var headTf = headCollider ? getTransform(headCollider) : null
            if (!headTf || headTf.isNull?.()) {
              headTf = getTransform(righthand ? rightHandTransform : leftHandTransform)
            }
            var headForward = readVec3Components(headTf.method("get_forward").invoke())
            var headRight = readVec3Components(headTf.method("get_right").invoke())
            var fwdX = headForward[0], fwdZ = headForward[2]
            var fwdMag = Math.sqrt(fwdX * fwdX + fwdZ * fwdZ) || 1
            fwdX /= fwdMag; fwdZ /= fwdMag
            var rgtX = headRight[0], rgtZ = headRight[2]
            var rgtMag = Math.sqrt(rgtX * rgtX + rgtZ * rgtZ) || 1
            rgtX /= rgtMag; rgtZ /= rgtMag
            var moveForward = rightStickY
            var moveSide = rightStickX
            var moveX = (fwdX * moveForward) + (rgtX * moveSide)
            var moveZ = (fwdZ * moveForward) + (rgtZ * moveSide)
            var moveY = leftStickY * 0.95
            var moveMag = Math.sqrt(moveX * moveX + moveY * moveY + moveZ * moveZ)
            if (moveMag < 0.025) {
              joystickFlyVelocity = smoothVec3(joystickFlyVelocity, [0, 0, 0], 0.32)
              return
            }
            var speed = 0.34
            var desired = [
              (moveX / moveMag) * speed * Math.min(1.25, moveMag * 1.4),
              (moveY / moveMag) * speed * Math.min(1.25, moveMag * 1.4),
              (moveZ / moveMag) * speed * Math.min(1.25, moveMag * 1.4)
            ]
            joystickFlyVelocity = smoothVec3(joystickFlyVelocity, desired, 0.22)
            localPlayer.method("RPC_AddForce").invoke(joystickFlyVelocity)
          } catch (e) { console.error("[JoystickFly]", e) }
        },
        isTogglable: true,
        toolTip: "Fly with sticks. Right=move, Left Y=up/down."
      })
    ],
    // Category 5: Gun Mods
    [
      new ButtonInfo({
        buttonText: "Insta Kill Gun",
        enableMethod: () => { sendNotification("Insta Kill Gun ON", false) },
        disableMethod: () => { sendNotification("Insta Kill Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 300
            var target = getGunModTarget()
            if (target && !target.isNull?.()) {
              var hitPos = getGunModAimPoint()
              var dmgSource = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke()
              target.method("RPC_PlayerHit").invoke(9999, hitPos, dmgSource)
            }
          } catch (e) { console.error("[InstaKillGun]", e) }
        },
        isTogglable: true,
        toolTip: "Toggle on, then grip+trigger to kill aimed player."
      }),
      new ButtonInfo({
        buttonText: "Insta Kill All",
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 1000
            var players = getAllNetPlayersList(false)
            var myPos = getTransform(getLocalPlayer()).method("get_position").invoke()
            var dmgSource = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke()
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_PlayerHit").invoke(9999, myPos, dmgSource) } catch (_) {}
            }
          } catch (e) { console.error("[KillAll]", e) }
        },
        isTogglable: false,
        toolTip: "Kill all players. Grip+trigger to fire."
      }),
      new ButtonInfo({
        buttonText: "TP All Gun",
        enableMethod: () => { sendNotification("TP All Gun ON", false) },
        disableMethod: () => { sendNotification("TP All Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 500
            var aimPoint = getGunModAimPoint()
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_Teleport").invoke(aimPoint) } catch (_) {}
            }
          } catch (e) { console.error("[TPAllGun]", e) }
        },
        isTogglable: true,
        toolTip: "Toggle on, then grip+trigger to TP all to aim point."
      }),
      new ButtonInfo({
        buttonText: "Give Fly Gun",
        enableMethod: () => { sendNotification("Give Fly Gun ON", false) },
        disableMethod: () => { sendNotification("Give Fly Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 300
            var target = getGunModTarget()
            if (target && !target.isNull?.()) {
              var handTf = getTransform(righthand ? rightHandTransform : leftHandTransform)
              var fwd = readVec3Components(handTf.method("get_forward").invoke())
              target.method("RPC_AddForce").invoke([fwd[0] * 0.34, 0.03, fwd[2] * 0.34])
            }
          } catch (e) { console.error("[GiveFlyGun]", e) }
        },
        isTogglable: true,
        toolTip: "Toggle on, then grip+trigger to launch aimed player."
      }),
      new ButtonInfo({
        buttonText: "Insta Kick Gun",
        enableMethod: () => { sendNotification("Insta Kick Gun ON", false) },
        disableMethod: () => { sendNotification("Insta Kick Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 1000
            var target = getGunModTarget()
            if (target && !target.isNull?.()) {
              var playerRef = null
              try { playerRef = target.method("get_PlayerRef").invoke() } catch (_) {}
              try { if (!playerRef) playerRef = target.field("_playerRef").value } catch (_) {}
              try { if (!playerRef) playerRef = target.field("<PlayerRef>k__BackingField").value } catch (_) {}
              var runner = null
              try {
                var NManagerInst = NManager.method("get_instance").invoke()
                runner = NManagerInst.method("get.runner").invoke()
              } catch (_) {}
              if (runner && !runner.isNull?.()) {
                try { runner.method("Disconnect", 1).invoke(playerRef) } catch (_) {}
                try { runner.method("Disconnect", 2).invoke(playerRef, true) } catch (_) {}
              }
              var methodNames = ["KickPlayer","RPC_KickPlayer","DisconnectPlayer","RemovePlayer","KickUserFromPrivateRoom","RemovePrivateRoomMember","KickNetPlayer","BanPlayer"]
              for (var m = 0; m < methodNames.length; m++) {
                try {
                  var inst = NManager.method("get_instance").invoke()
                  if (inst && !inst.isNull?.()) {
                    inst.method(methodNames[m], 1).invoke(target)
                    return
                  }
                } catch (_) {}
              }
            }
          } catch (e) { console.error("[InstaKickGun]", e) }
        },
        isTogglable: true,
        toolTip: "Toggle on, then grip+trigger to kick aimed player."
      }),
      new ButtonInfo({
        buttonText: "Delete Player Gun",
        enableMethod: () => { sendNotification("Delete Player Gun ON", false) },
        disableMethod: () => { sendNotification("Delete Player Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 500
            var target = getGunModTarget()
            if (target && !target.isNull?.()) {
              var dmgSource = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke()
              target.method("RPC_PlayerHit").invoke(99999, getGunModAimPoint(), dmgSource)
              target.method("RPC_Teleport").invoke([0, -999999, 0])
            }
          } catch (e) { console.error("[DeleteGun]", e) }
        },
        isTogglable: true,
        toolTip: "Toggle on, then grip+trigger to kill+void aimed player."
      }),
      new ButtonInfo({
        buttonText: "VFX Spammer Gun",
        enableMethod: () => { sendNotification("VFX Spammer Gun ON", false) },
        disableMethod: () => { sendNotification("VFX Spammer Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 200
            var aimPoint = getGunModAimPoint()
            var vfxEntry = vfxList[selectedVFXIndex]
            if (vfxEntry) {
              var players = getAllNetPlayersList(false)
              for (var i = 0; i < players.length; i++) {
                try { players[i].method("RPC_PlayVFX").invoke(vfxEntry.id, aimPoint) } catch (_) {}
              }
            }
          } catch (e) { console.error("[VFXGun]", e) }
        },
        isTogglable: true,
        toolTip: "Toggle on, then grip+trigger to spam VFX at aim point."
      }),
      new ButtonInfo({
        buttonText: "Orbit Gun",
        enableMethod: () => { sendNotification("Orbit Gun ON", false) },
        disableMethod: () => { sendNotification("Orbit Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 500
            var aimPoint = getGunModAimPoint()
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try {
                var angle = (Date.now() / 1000) * 1.85 + (i * (Math.PI * 2 / Math.max(players.length, 1)))
                var offset = [Math.cos(angle) * 3.5, 1.5, Math.sin(angle) * 3.5]
                players[i].method("RPC_Teleport").invoke(Vector3.method("op_Addition").invoke(aimPoint, offset))
              } catch (_) {}
            }
          } catch (e) { console.error("[OrbitGun]", e) }
        },
        isTogglable: true,
        toolTip: "Toggle on, then grip+trigger to orbit players at aim point."
      }),
      new ButtonInfo({
        buttonText: "Player Info Gun",
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 500
            getPlayerInfoGun()
          } catch (e) { console.error("[PlayerInfoGunBtn]", e) }
        },
        isTogglable: false,
        toolTip: "Grip+trigger to dump aimed player info to console."
      }),
      new ButtonInfo({
        buttonText: "Stun All Gun",
        enableMethod: () => { sendNotification("Stun All Gun ON", false) },
        disableMethod: () => { sendNotification("Stun All Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 1000
            var aimPoint = getGunModAimPoint()
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_PlayerStun").invoke(aimPoint, 5, 3, 1) } catch(_) {}
            }
          } catch (e) { console.error("[StunAllGun]", e) }
        },
        isTogglable: true,
        toolTip: "Stun all players at aim point."
      }),
      new ButtonInfo({
        buttonText: "Spawn Shooter Gun",
        enableMethod: () => { sendNotification("Shooter: " + shooterNames[selectedShooterIndex], false) },
        disableMethod: () => { sendNotification("Shooter Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 400
            var aimPoint = getGunModAimPoint()
            var prefabName = shooterPrefabs[selectedShooterIndex]
            spawnNetworkPrefab(prefabName, aimPoint, identityQuaternion)
          } catch (e) { console.error("[ShooterGun]", e) }
        },
        isTogglable: true,
        toolTip: "Spawns selected shooter projectile at aim. Cycle in Settings."
      }),
      new ButtonInfo({
        buttonText: "Spam SFX",
        enableMethod: () => { spamSfxEnabled = true; sendNotification("Spam SFX ON", false) },
        disableMethod: () => { spamSfxEnabled = false; sendNotification("Spam SFX OFF", false) },
        method: () => {
          if (rightGrab || leftGrab) spamSFXNetwork()
        },
        isTogglable: true,
        toolTip: "Hold grip to play networked SFX at hand. Cycle ID in Settings."
      }),
      new ButtonInfo({
        buttonText: "Football Kidnapper",
        enableMethod: () => { basketballObject = null; basketballTargetPlayer = null; hasSpawnedForCurrentTarget = false; sendNotification("Football Kidnapper ON", false) },
        disableMethod: () => {
          try {
            if (basketballTargetPlayer && !basketballTargetPlayer.isNull?.()) {
              var handTf = righthand ? rightHandTransform : leftHandTransform
              if (handTf && !handTf.isNull?.()) {
                var myPos = getTransform(handTf).method("get_position").invoke()
                basketballTargetPlayer.method("RPC_Teleport").invoke(myPos)
              }
            }
            if (basketballObject && !basketballObject.isNull?.()) Destroy(basketballObject)
          } catch (_) {}
          basketballObject = null; basketballTargetPlayer = null; hasSpawnedForCurrentTarget = false
          sendNotification("Football Kidnapper OFF", false)
        },
        method: () => {
          try {
            var gripping = righthand ? leftGrab : rightGrab
            if (gripping) {
              var handTf = getTransform(righthand ? rightHandTransform : leftHandTransform)
              var handPos = handTf.method("get_position").invoke()
              var fwd = handTf.method("get_forward").invoke()
              var startPos = Vector3.method("op_Addition").invoke(handPos, Vector3.method("op_Multiply").invoke(fwd, 0.08))

              if (!basketballTargetPlayer || basketballTargetPlayer.isNull?.()) {
                var rayData = doGunRaycast()
                if (rayData.collider && !rayData.collider.isNull?.()) {
                  var hitGO = rayData.collider.method("get_gameObject").invoke()
                  if (hitGO && !hitGO.isNull()) {
                    var hitPlayer = hitGO.method("GetComponentInParent", 0).inflate(NetPlayer).invoke()
                    if (hitPlayer && !hitPlayer.isNull() && !playerIsLocal(hitPlayer)) {
                      var dist = Vector3.method("Distance").invoke(startPos, rayData.point)
                      if (dist <= 0.5) {
                        basketballTargetPlayer = hitPlayer
                        hasSpawnedForCurrentTarget = false
                        sendNotification("Target Locked!", false, 2)
                      }
                    }
                  }
                }
              }

              if (basketballTargetPlayer && !hasSpawnedForCurrentTarget && (righthand ? rightTrigger : leftTrigger) && Date.now() > gunDelay) {
                gunDelay = Date.now() + 300
                var rayData2 = doGunRaycast()
                if (rayData2.point) {
                  basketballObject = spawnNetworkPrefab("item_football", rayData2.point, identityQuaternion)
                  if (basketballObject && !basketballObject.isNull?.()) {
                    hasSpawnedForCurrentTarget = true
                    sendNotification("Football linked!", false, 2)
                  }
                }
              }
            }

            if (basketballTargetPlayer && !basketballTargetPlayer.isNull?.() && basketballObject && !basketballObject.isNull?.()) {
              if (Date.now() > lastBasketballTeleportTime) {
                lastBasketballTeleportTime = Date.now() + 100
                var ballPos = null
                try {
                  var rb = basketballObject.method("GetComponentInChildren", 0).inflate(Rigidbody).invoke()
                  if (rb && !rb.isNull()) ballPos = rb.method("get_position").invoke()
                } catch (_) {}
                if (!ballPos) {
                  try { ballPos = getTransform(basketballObject).method("get_position").invoke() } catch (_) {}
                }
                if (ballPos) basketballTargetPlayer.method("RPC_Teleport").invoke(ballPos)
              }
            }
          } catch (e) { console.error("[FootballKidnapper]", e) }
        },
        isTogglable: true,
        toolTip: "Touch player to lock, trigger to link. Teleports target to football continuously."
      })
    ],
    // Category 6: Player Mods
    [
      new ButtonInfo({
        buttonText: "Invisible",
        enableMethod: () => {
          invisibleEnabled = true
          try {
            var localPlayer = getLocalPlayer()
            if (localPlayer && !localPlayer.isNull?.()) {
              var playerView = localPlayer.method("get_playerView").invoke()
              if (playerView && !playerView.isNull?.()) {
                var cam = playerView.method("get_cameraTransform").invoke()
                if (cam && !cam.isNull?.()) {
                  getTransform(cam).method("set_position").invoke([0, -99999, 0])
                }
              }
            }
          } catch (_) {}
          sendNotification("Invisible on!", false)
        },
        disableMethod: () => {
          invisibleEnabled = false
          sendNotification("Invisible off!", false)
        },
        method: () => {
          if (!invisibleEnabled) return
          try {
            var localPlayer = getLocalPlayer()
            if (localPlayer && !localPlayer.isNull?.()) {
              var playerView = localPlayer.method("get_playerView").invoke()
              if (playerView && !playerView.isNull?.()) {
                var cam = playerView.method("get_cameraTransform").invoke()
                if (cam && !cam.isNull?.()) {
                  getTransform(cam).method("set_position").invoke([0, -99999, 0])
                }
              }
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Makes your camera invisible (teleports cam)."
      }),
      new ButtonInfo({
        buttonText: "Invincible",
        enableMethod: () => {
          try {
            var localPlayer = getLocalPlayer()
            if (localPlayer && !localPlayer.isNull?.()) {
              localPlayer.method("set_isInvincible").invoke(true)
            }
          } catch (_) {}
          sendNotification("Invincible on!", false)
        },
        disableMethod: () => {
          try {
            var localPlayer = getLocalPlayer()
            if (localPlayer && !localPlayer.isNull?.()) {
              localPlayer.method("set_isInvincible").invoke(false)
            }
          } catch (_) {}
          sendNotification("Invincible off!", false)
        },
        isTogglable: true,
        toolTip: "Prevents damage."
      }),
      new ButtonInfo({
        buttonText: "Inf Health",
        enableMethod: () => { infHealthEnabled = true; sendNotification("Inf Health on!", false) },
        disableMethod: () => { infHealthEnabled = false; sendNotification("Inf Health off!", false) },
        isTogglable: true,
        toolTip: "Sets max health to 999999."
      }),
      new ButtonInfo({
        buttonText: "Dual Revolver Launch",
        method: () => {
          try {
            var players = getAllNetPlayersList(false)
            var myPos = getTransform(getLocalPlayer()).method("get_position").invoke()
            for (var i = 0; i < players.length; i++) {
              try {
                var pPos = getTransform(players[i]).method("get_position").invoke()
                var dist = Vector3.method("Distance").invoke(myPos, pPos)
                if (dist < 0.7) {
                  var fwd = readVec3Components(getTransform(players[i]).method("get_forward").invoke())
                  var launch = [fwd[0] * 800, 400, fwd[2] * 800]
                  getLocalPlayer().method("RPC_AddForce").invoke(launch)
                  sendNotification("Launch!", false)
                  break
                }
              } catch (_) {}
            }
          } catch (e) { console.error("[Launch]", e) }
        },
        isTogglable: false,
        toolTip: "Launch self when near someone with revolver."
      }),
      new ButtonInfo({
        buttonText: "Dev Mode",
        method: () => { enableDevMode(); sendNotification("Dev Mode enabled", false) },
        isTogglable: false,
        toolTip: "Enables developer mode for extra features."
      }),
      new ButtonInfo({
        buttonText: "Grant Stash Slots",
        method: () => { grantAllStashSlots(); sendNotification("All stash slots granted", false) },
        isTogglable: false,
        toolTip: "Unlocks all stash slots."
      }),
      new ButtonInfo({
        buttonText: "Fishing Max Size",
        method: () => { installFishingHooks(); sendNotification("Fishing: max size always", false) },
        isTogglable: false,
        toolTip: "All fish spawn at max size (127) for max value."
      }),
      new ButtonInfo({
        buttonText: "Heart Gun Inf",
        method: () => { installHeartGunHooks(); sendNotification("Heart Gun: infinite charge", false) },
        isTogglable: false,
        toolTip: "Heart gun never runs out of charge."
      }),
      new ButtonInfo({
        buttonText: "Mining Laser Inf",
        method: () => { installMiningLaserHooks(); sendNotification("Mining Laser: infinite fuel", false) },
        isTogglable: false,
        toolTip: "Mining laser has infinite fuel and no overheat."
      }),
      new ButtonInfo({
        buttonText: "Salmon Any Item",
        method: () => { installSalmonCannonHook(); sendNotification("Salmon Cannon: launches any item", false) },
        isTogglable: false,
        toolTip: "Salmon cannon launches any item that touches it."
      })
    ],
    // Category 7: Overpowered
    [
      new ButtonInfo({
        buttonText: "Infinite Ammo",
        enableMethod: () => { infAmmoEnabled = true; sendNotification("Inf Ammo on!", false) },
        disableMethod: () => { infAmmoEnabled = false; sendNotification("Inf Ammo off!", false) },
        method: () => {
          if (!infAmmoEnabled) return
          try {
            var objs = Object.method("FindObjectsByType", 0).invoke(0)
            for (var i = 0; i < objs.length; i++) {
              try {
                var obj = objs[i]
                var methods = ["set_ammoLoaded", "set_currentAmmo", "set_AmmoLoaded"]
                for (var m = 0; m < methods.length; m++) {
                  try { obj.method(methods[m]).invoke(999) } catch (_) {}
                }
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "All weapons have infinite ammo."
      }),
      new ButtonInfo({
        buttonText: "No Recoil",
        enableMethod: () => { noRecoilEnabled = true; sendNotification("No Recoil on!", false) },
        disableMethod: () => { noRecoilEnabled = false; sendNotification("No Recoil off!", false) },
        method: () => {
          if (!noRecoilEnabled) return
          try {
            var objs = Object.method("FindObjectsByType", 0).invoke(0)
            for (var i = 0; i < objs.length; i++) {
              try {
                var methods = ["set_recoilMultiplier", "set_RecoilMultiplier"]
                for (var m = 0; m < methods.length; m++) {
                  try { obj.method(methods[m]).invoke(0) } catch (_) {}
                }
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Removes weapon recoil."
      }),
      new ButtonInfo({
        buttonText: "Rapid Fire",
        enableMethod: () => { rapidFireEnabled = true; sendNotification("Rapid Fire on!", false) },
        disableMethod: () => { rapidFireEnabled = false; sendNotification("Rapid Fire off!", false) },
        method: () => {
          if (!rapidFireEnabled) return
          try {
            var objs = Object.method("FindObjectsByType", 0).invoke(0)
            for (var i = 0; i < objs.length; i++) {
              try {
                var methods = ["set_fireRate", "set_FireRate", "set_cooldownTime", "set_CooldownTime"]
                for (var m = 0; m < methods.length; m++) {
                  try { obj.method(methods[m]).invoke(0.01) } catch (_) {}
                }
                var cockMethods = ["set__isHammerCocked", "set_isHammerCocked"]
                for (var m = 0; m < cockMethods.length; m++) {
                  try { obj.method(cockMethods[m]).invoke(true) } catch (_) {}
                }
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Maximum fire rate on all weapons."
      }),
      new ButtonInfo({
        buttonText: "Give Fly All",
        enableMethod: () => { giveFlyAllEnabled = true; sendNotification("Give Fly All on!", false) },
        disableMethod: () => { giveFlyAllEnabled = false; sendNotification("Give Fly All off!", false) },
        method: () => {
          if (!giveFlyAllEnabled) return
          try {
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try {
                var fwd = readVec3Components(getTransform(players[i]).method("get_forward").invoke())
                players[i].method("RPC_AddForce").invoke([fwd[0] * 0.54, 0.06, fwd[2] * 0.54])
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "All players get forward fly force."
      }),
      new ButtonInfo({
        buttonText: "Item Rain",
        enableMethod: () => { itemRainEnabled = true; sendNotification("Item Rain on!", false) },
        disableMethod: () => { itemRainEnabled = false; sendNotification("Item Rain off!", false) },
        method: () => {
          if (!itemRainEnabled) return
          try {
            if (itemList.length === 0) buildItemList()
            var myPos = getTransform(getLocalPlayer()).method("get_position").invoke()
            var rainPos = Vector3.method("op_Addition").invoke(myPos, [
              (Math.random() - 0.5) * 8,
              10 + Math.random() * 5,
              (Math.random() - 0.5) * 8
            ])
            var entry = itemList[Math.floor(Math.random() * itemList.length)]
            if (entry) spawnNetworkPrefab(entry.name, rainPos, identityQuaternion)
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Rains random items above your head."
      }),
      new ButtonInfo({
        buttonText: "RPG Hands",
        enableMethod: () => { sendNotification("RPG Hands on! Shoot rockets from hand.", false) },
        disableMethod: () => { sendNotification("RPG Hands off!", false) },
        method: () => {
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 200
            var handTf = getTransform(righthand ? rightHandTransform : leftHandTransform)
            var handPos = handTf.method("get_position").invoke()
            var fwd = handTf.method("get_forward").invoke()
            var spawnPos = Vector3.method("op_Addition").invoke(handPos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
            spawnNetworkPrefab("RPGRocket", spawnPos, identityQuaternion)
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Shoot RPG rockets from hand."
      }),
      new ButtonInfo({
        buttonText: "GunLib",
        enableMethod: () => { gunLibEnabled = true; createGunLib(); sendNotification("GunLib ON — grip to aim", false) },
        disableMethod: () => { gunLibEnabled = false; destroyGunLib(); autoGunLibActive = false; sendNotification("GunLib OFF", false) },
        method: () => {
          if (!gunLibEnabled) return
          try { updateGunLib() } catch (e) { console.error("[GunLib Tick]", e) }
        },
        isTogglable: true,
        toolTip: "Gun beam from hand. Grip to aim."
      }),
      new ButtonInfo({
        buttonText: "Unlock All",
        method: () => {
          try {
            var state = AssemblyCSharp.class("AnimalCompany.App").method("get_state").invoke()
            var inv = state.method("get_user").invoke().method("get_inventory").invoke()
            inv.method("get_devOwnAllAvatarItemsOverride").invoke().method("set_value").invoke(true)
            var enumerator = state.method("get_gameplayItems").invoke().method("get_all").invoke().method("get_Values").invoke().method("GetEnumerator").invoke()
            var count = 0
            while (enumerator.method("MoveNext").invoke()) {
              var item = enumerator.method("get_Current").invoke()
              try { item.method("get_isUnlocked").invoke().method("set_value").invoke(true) } catch(_) {}
              try { item.method("get_unlockDependenciesSatisfied").invoke().method("set_value").invoke(true) } catch(_) {}
              try { item.method("get_unlockable").invoke().method("set_value").invoke(true) } catch(_) {}
              try {
                var inv2 = state.method("get_user").invoke().method("get_inventory").invoke()
                inv2.method("get_unlockedGameplayItems").invoke().method("Add").invoke(item.method("get_id").invoke())
              } catch(_) {}
              count++
            }
            var enumerator2 = state.method("get_avatarItems").invoke().method("get_all").invoke().method("get_Values").invoke().method("GetEnumerator").invoke()
            var cosmeticCount = 0
            while (enumerator2.method("MoveNext").invoke()) {
              var avatarItem = enumerator2.method("get_Current").invoke()
              try { avatarItem.method("get_isOwned").invoke().method("set_value").invoke(true) } catch(_) {}
              try { avatarItem.method("get_canPurchaseDirectly").invoke().method("set_value").invoke(true) } catch(_) {}
              try { avatarItem.method("get_isDevItem").invoke().method("set_value").invoke(true) } catch(_) {}
              cosmeticCount++
            }
            sendNotification("Unlocked " + count + " items + " + cosmeticCount + " cosmetics!", false, 5)
          } catch (e) { console.error("[UnlockAll]", e); sendNotification("Unlock All failed: " + e, false) }
        },
        isTogglable: false,
        toolTip: "Unlock all gameplay items and cosmetics."
      }),
      new ButtonInfo({
        buttonText: "Container Freedom",
        method: () => { installContainerFreedom(); sendNotification("Container Freedom: all bags, max cap", false) },
        isTogglable: false,
        toolTip: "All items can be bagged, max capacity on all containers."
      }),
      new ButtonInfo({
        buttonText: "Multi Buy",
        method: () => {
          try {
            if (!multiBuyInstalled) {
              var cls = AssemblyCSharp.class("AnimalCompany.App")
              var state = cls.method("get_state").invoke()
              var shop = state.method("get_shop").invoke()
              var methods = ["TryToBuy", "HandlePurchase"]
              for (var i = 0; i < methods.length; i++) {
                try { shop.method(methods[i]).implementation = function() {} } catch(_) {}
              }
              multiBuyInstalled = true
              sendNotification("Multi Buy: repeat purchases enabled", false)
            }
          } catch(e) { console.error("[MultiBuy]", e) }
        },
        isTogglable: false,
        toolTip: "Repeat purchases on shop items."
      }),
      new ButtonInfo({
        buttonText: "RPC Protection",
        method: () => { installRPCProtection(); sendNotification("RPC Protection: 27+ RPCs blocked", false) },
        isTogglable: false,
        toolTip: "Blocks hostile RPCs from other players."
      }),
      new ButtonInfo({
        buttonText: "Sell Value 2x",
        method: () => {
          sellValueMult = sellValueMult >= 128 ? 1.0 : sellValueMult * 2
          installSellValueMult()
          sendNotification("Sell Value: " + sellValueMult + "x", false)
        },
        isTogglable: false,
        toolTip: "Double sell value (cycles 2x,4x,8x,16x,32x,64x,128x,1x)."
      }),
      new ButtonInfo({
        buttonText: "Arena Killer Bypass",
        method: () => { installArenaKillerBypass(); sendNotification("Arena Killer bypassed", false) },
        isTogglable: false,
        toolTip: "Stops arena item killer from destroying spawned items."
      }),
      new ButtonInfo({
        buttonText: "RPC Chaos Loop",
        method: () => { rpcChaosEnabled = !rpcChaosEnabled; sendNotification("RPC Chaos: " + (rpcChaosEnabled ? "ON" : "OFF"), false) },
        isTogglable: true,
        toolTip: "Random force/stun/hit/vfx/color/tp on all players."
      }),
      new ButtonInfo({
        buttonText: "Selling Spiral",
        enableMethod: () => { spawnSellingSpiral() },
        disableMethod: () => { clearSellingMachines(); sendNotification("Cleared selling machines", false) },
        isTogglable: true,
        toolTip: "Spawns 60 selling machines in spiral around you."
      }),
      new ButtonInfo({
        buttonText: "Selling Dome",
        enableMethod: () => { spawnSellingDome() },
        disableMethod: () => { clearSellingMachines(); sendNotification("Cleared dome machines", false) },
        isTogglable: true,
        toolTip: "Spawns 240 selling machines in dome around you."
      })
    ],
    // Category 8: ID Browser
    [
      new ButtonInfo({
        buttonText: "Switch Type",
        method: () => {
          selectedIdType = (selectedIdType + 1) % 3
          var typeName = ["Mob IDs", "Item IDs", "VFX Types"][selectedIdType]
          sendNotification("Browsing: " + typeName, false, 2)
        },
        isTogglable: false,
        toolTip: "Switch between Mob, Item, and VFX IDs."
      }),
      new ButtonInfo({
        buttonText: "Prev ID",
        method: () => {
          if (mobList.length === 0) buildMobList()
          if (itemList.length === 0) buildItemList()
          if (vfxList.length === 0) buildVFXList()
          if (selectedIdType === 0) {
            selectedMobIndex--; if (selectedMobIndex < 0) selectedMobIndex = mobList.length - 1
            if (mobList[selectedMobIndex]) sendNotification("Mob: " + mobList[selectedMobIndex].name, false, 3)
          } else if (selectedIdType === 1) {
            selectedItemIndex--; if (selectedItemIndex < 0) selectedItemIndex = itemList.length - 1
            if (itemList[selectedItemIndex]) sendNotification("Item: " + itemList[selectedItemIndex].name, false, 3)
          } else {
            selectedVFXIndex--; if (selectedVFXIndex < 0) selectedVFXIndex = vfxList.length - 1
            if (vfxList[selectedVFXIndex]) sendNotification("VFX: " + vfxList[selectedVFXIndex].name, false, 3)
          }
        },
        isTogglable: false,
        toolTip: "Previous ID in current category."
      }),
      new ButtonInfo({
        buttonText: "Next ID",
        method: () => {
          if (mobList.length === 0) buildMobList()
          if (itemList.length === 0) buildItemList()
          if (vfxList.length === 0) buildVFXList()
          if (selectedIdType === 0) {
            selectedMobIndex++; if (selectedMobIndex >= mobList.length) selectedMobIndex = 0
            if (mobList[selectedMobIndex]) sendNotification("Mob: " + mobList[selectedMobIndex].name, false, 3)
          } else if (selectedIdType === 1) {
            selectedItemIndex++; if (selectedItemIndex >= itemList.length) selectedItemIndex = 0
            if (itemList[selectedItemIndex]) sendNotification("Item: " + itemList[selectedItemIndex].name, false, 3)
          } else {
            selectedVFXIndex++; if (selectedVFXIndex >= vfxList.length) selectedVFXIndex = 0
            if (vfxList[selectedVFXIndex]) sendNotification("VFX: " + vfxList[selectedVFXIndex].name, false, 3)
          }
        },
        isTogglable: false,
        toolTip: "Next ID in current category."
      }),
      new ButtonInfo({
        buttonText: "Show Current",
        method: () => {
          if (selectedIdType === 0 && mobList[selectedMobIndex]) sendNotification("Current: " + mobList[selectedMobIndex].name + " (ID: " + mobList[selectedMobIndex].id + ")", false, 5)
          else if (selectedIdType === 1 && itemList[selectedItemIndex]) sendNotification("Current: " + itemList[selectedItemIndex].name, false, 5)
          else if (vfxList[selectedVFXIndex]) sendNotification("Current: " + vfxList[selectedVFXIndex].name + " (ID: " + vfxList[selectedVFXIndex].id + ")", false, 5)
        },
        isTogglable: false,
        toolTip: "Show current selection."
      })
    ],
    // Category 9: RPC Mods
    [
      new ButtonInfo({
        buttonText: "RPC Kill All",
        method: () => {
          try {
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_DoPlayerDie").invoke(true) } catch (_) {}
            }
            sendNotification("Killed all!", false)
          } catch (e) { console.error("[RPCKillAll]", e) }
        },
        isTogglable: false,
        toolTip: "Kill all players via RPC."
      }),
      new ButtonInfo({
        buttonText: "RPC Kill All Loop",
        enableMethod: () => { rpcKillAllLoopEnabled = true; sendNotification("RPC Kill All Loop ON", false) },
        disableMethod: () => { rpcKillAllLoopEnabled = false; sendNotification("RPC Kill All Loop OFF", false) },
        method: () => {
          if (!rpcKillAllLoopEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 800
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_DoPlayerDie").invoke(true) } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Continuously kills all players."
      }),
      new ButtonInfo({
        buttonText: "RPC Revive All",
        method: () => {
          try {
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_DoPlayerDie").invoke(false) } catch (_) {}
            }
            sendNotification("Revived all!", false)
          } catch (e) { console.error("[RPCReviveAll]", e) }
        },
        isTogglable: false,
        toolTip: "Revive all players."
      }),
      new ButtonInfo({
        buttonText: "RPC Stun All",
        method: () => {
          try {
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try {
                var pos = getTransform(players[i]).method("get_position").invoke()
                players[i].method("RPC_PlayerStun").invoke(pos, 5, 3, 1)
              } catch (_) {}
            }
            sendNotification("Stunned all!", false)
          } catch (e) { console.error("[RPCStunAll]", e) }
        },
        isTogglable: false,
        toolTip: "Stun all players."
      }),
      new ButtonInfo({
        buttonText: "RPC Stun All Loop",
        enableMethod: () => { rpcStunAllLoopEnabled = true; sendNotification("RPC Stun All Loop ON", false) },
        disableMethod: () => { rpcStunAllLoopEnabled = false; sendNotification("RPC Stun All Loop OFF", false) },
        method: () => {
          if (!rpcStunAllLoopEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 1000
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try {
                var pos = getTransform(players[i]).method("get_position").invoke()
                players[i].method("RPC_PlayerStun").invoke(pos, 5, 3, 1)
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Continuously stuns all players."
      }),
      new ButtonInfo({
        buttonText: "RPC TP All 2 Me",
        method: () => {
          try {
            var myPos = getTransform(getLocalPlayer()).method("get_position").invoke()
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_Teleport").invoke(myPos) } catch (_) {}
            }
            sendNotification("TP all to me!", false)
          } catch (e) { console.error("[RCTPAll]", e) }
        },
        isTogglable: false,
        toolTip: "Teleport all players to you."
      }),
      new ButtonInfo({
        buttonText: "RPC TP All 2 Void",
        method: () => {
          try {
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_Teleport").invoke([0, -99999, 0]) } catch (_) {}
            }
            sendNotification("All to void!", false)
          } catch (e) { console.error("[RCTPVoid]", e) }
        },
        isTogglable: false,
        toolTip: "Send all players to the void."
      }),
      new ButtonInfo({
        buttonText: "RPC Launch All",
        method: () => {
          try {
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_AddForce").invoke([0, 1500, 0]) } catch (_) {}
            }
            sendNotification("Launched all!", false)
          } catch (e) { console.error("[RPCLaunch]", e) }
        },
        isTogglable: false,
        toolTip: "Launch all players upward."
      }),
      new ButtonInfo({
        buttonText: "RPC Launch All Down",
        method: () => {
          try {
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_AddForce").invoke([0, -1500, 0]) } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Slam all players down."
      }),
      new ButtonInfo({
        buttonText: "RPC Bounce All",
        method: () => {
          try {
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try {
                players[i].method("RPC_AddForce").invoke([(Math.random() - 0.5) * 30, 20 + Math.random() * 10, (Math.random() - 0.5) * 30])
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Bounce all players randomly."
      }),
      new ButtonInfo({
        buttonText: "RPC Bounce All Loop",
        enableMethod: () => { rpcBounceAllLoopEnabled = true; sendNotification("RPC Bounce All Loop ON", false) },
        disableMethod: () => { rpcBounceAllLoopEnabled = false; sendNotification("RPC Bounce All Loop OFF", false) },
        method: () => {
          if (!rpcBounceAllLoopEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 500
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try {
                players[i].method("RPC_AddForce").invoke([(Math.random() - 0.5) * 30, 20 + Math.random() * 10, (Math.random() - 0.5) * 30])
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Continuously bounces all players."
      }),
      new ButtonInfo({
        buttonText: "RPC Hit All 50",
        method: () => {
          try {
            var players = getAllNetPlayersList(false)
            var myPos = getTransform(getLocalPlayer()).method("get_position").invoke()
            var dmgSource = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke()
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_PlayerHit").invoke(50, myPos, dmgSource) } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Deal 50 damage to all."
      }),
      new ButtonInfo({
        buttonText: "RPC Hit All Loop",
        enableMethod: () => { rpcHitAllLoopEnabled = true; sendNotification("RPC Hit All Loop ON", false) },
        disableMethod: () => { rpcHitAllLoopEnabled = false; sendNotification("RPC Hit All Loop OFF", false) },
        method: () => {
          if (!rpcHitAllLoopEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 300
            var players = getAllNetPlayersList(false)
            var dmgSource = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke()
            for (var i = 0; i < players.length; i++) {
              try {
                var pos = getTransform(players[i]).method("get_position").invoke()
                players[i].method("RPC_PlayerHit").invoke(10, pos, dmgSource)
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Deal 10 damage to all every 0.3s."
      }),
      new ButtonInfo({
        buttonText: "RPC Ragdoll All Loop",
        enableMethod: () => { rpcRagdollAllLoopEnabled = true; sendNotification("RPC Ragdoll All Loop ON", false) },
        disableMethod: () => { rpcRagdollAllLoopEnabled = false; sendNotification("RPC Ragdoll All Loop OFF", false) },
        method: () => {
          if (!rpcRagdollAllLoopEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 1500
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try {
                var pos = getTransform(players[i]).method("get_position").invoke()
                players[i].method("RPC_PlayerStun").invoke(pos, 999, 99, 0)
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Force ragdoll all players."
      }),
      new ButtonInfo({
        buttonText: "RPC Stinky All",
        method: () => {
          try {
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_TagAsStinky").invoke() } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Tag all players as stinky."
      }),
      new ButtonInfo({
        buttonText: "RPC Money All +10M",
        method: () => {
          try {
            var players = getAllNetPlayersList(true)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_AddPlayerMoney").invoke(10000000) } catch (_) {}
            }
            sendNotification("Money given to all!", false)
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Give 10M money to all players."
      }),
      new ButtonInfo({
        buttonText: "RPC Inf Money All",
        enableMethod: () => { rpcInfMoneyAllEnabled = true; sendNotification("RPC Inf Money All ON", false) },
        disableMethod: () => { rpcInfMoneyAllEnabled = false; sendNotification("RPC Inf Money All OFF", false) },
        method: () => {
          if (!rpcInfMoneyAllEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 900
            var players = getAllNetPlayersList(true)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_AddPlayerMoney").invoke(10000000) } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Give 10M money to all every 0.9s."
      }),
      new ButtonInfo({
        buttonText: "RPC Chaos All Loop",
        enableMethod: () => { rpcChaosAllLoopEnabled = true; sendNotification("RPC Chaos All Loop ON", false) },
        disableMethod: () => { rpcChaosAllLoopEnabled = false; sendNotification("RPC Chaos All Loop OFF", false) },
        method: () => {
          if (!rpcChaosAllLoopEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 500
            var players = getAllNetPlayersList(false)
            var dmgSource = AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke()
            for (var i = 0; i < players.length; i++) {
              try {
                var r = Math.floor(Math.random() * 6)
                var p = players[i]
                if (r === 0) p.method("RPC_AddForce").invoke([(Math.random() - 0.5) * 50, 25, (Math.random() - 0.5) * 50])
                else if (r === 1) { var pos = getTransform(p).method("get_position").invoke(); p.method("RPC_PlayerStun").invoke(pos, 999, 99, 0) }
                else if (r === 2) { var pos2 = getTransform(p).method("get_position").invoke(); p.method("RPC_PlayerHit").invoke(10, pos2, dmgSource) }
                else if (r === 3) p.method("RPC_Teleport").invoke([(Math.random() - 0.5) * 20, 15 + Math.random() * 10, (Math.random() - 0.5) * 20])
                else if (r === 4) p.method("RPC_SetColorHSV").invoke(Math.random() * 127, 127, 1, 1)
                else p.method("RPC_TagAsStinky").invoke()
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Random chaos on all players."
      }),
      new ButtonInfo({
        buttonText: "RPC Rainbow All",
        enableMethod: () => { rpcRainbowAllEnabled = true; sendNotification("RPC Rainbow All ON", false) },
        disableMethod: () => { rpcRainbowAllEnabled = false; sendNotification("RPC Rainbow All OFF", false) },
        method: () => {
          if (!rpcRainbowAllEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 200
            hueVal = (hueVal + 5) % 127
            var players = getAllNetPlayersList(true)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_SetColorHSV").invoke(hueVal, 127, 1, 1) } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Rainbow color all players."
      }),
      new ButtonInfo({
        buttonText: "RPC Explode All Bags",
        method: () => {
          try {
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try {
                var pos = getTransform(players[i]).method("get_position").invoke()
                spawnNetworkPrefab("item_dynamite", pos, identityQuaternion)
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Spawn dynamite on all players."
      }),
      new ButtonInfo({
        buttonText: "RPC Invincible All",
        method: () => {
          try {
            var players = getAllNetPlayersList(true)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("set_isInvincible").invoke(true) } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Make all players invincible."
      }),
      new ButtonInfo({
        buttonText: "RPC Remove Invincible All",
        method: () => {
          try {
            var players = getAllNetPlayersList(true)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("set_isInvincible").invoke(false) } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Remove invincibility from all."
      }),
      new ButtonInfo({
        buttonText: "RPC Buff All Speed",
        method: () => {
          try {
            var players = getAllNetPlayersList(true)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_ApplyBuff").invoke(1) } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Speed buff all players."
      }),
      new ButtonInfo({
        buttonText: "RPC Buff All AntiGrav",
        method: () => {
          try {
            var players = getAllNetPlayersList(true)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_ApplyBuff").invoke(7) } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Anti-grav buff all players."
      }),
      new ButtonInfo({
        buttonText: "RPC Award Kill All",
        method: () => {
          try {
            var players = getAllNetPlayersList(true)
            for (var i = 0; i < players.length; i++) {
              try { players[i].method("RPC_AwardKill").invoke() } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Award kill all players."
      }),
      new ButtonInfo({
        buttonText: "RPC TP Me To Sky",
        method: () => {
          try {
            var localPlayer = getLocalPlayer()
            localPlayer.method("RPC_Teleport").invoke([0, 200, 0])
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Teleport yourself to the sky."
      }),
      new ButtonInfo({
        buttonText: "RPC Kill Me Loop",
        enableMethod: () => { rpcKillMeLoopEnabled = true; sendNotification("RPC Kill Me Loop ON", false) },
        disableMethod: () => { rpcKillMeLoopEnabled = false; sendNotification("RPC Kill Me Loop OFF", false) },
        method: () => {
          if (!rpcKillMeLoopEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 500
            getLocalPlayer().method("RPC_DoPlayerDie").invoke(true)
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Continuously kill yourself."
      }),
      new ButtonInfo({
        buttonText: "RPC Self Buff All",
        method: () => {
          try {
            var localPlayer = getLocalPlayer()
            var buffs = [1, 2, 3, 5, 7]
            for (var i = 0; i < buffs.length; i++) {
              try { localPlayer.method("RPC_ApplyBuff").invoke(buffs[i]) } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Apply all buffs to yourself."
      }),
      new ButtonInfo({
        buttonText: "RPC Self Heal",
        method: () => {
          try {
            var localPlayer = getLocalPlayer()
            localPlayer.method("set_healthLost").invoke(0)
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Heal yourself to full."
      }),
      new ButtonInfo({
        buttonText: "RPC Award Kill",
        method: () => {
          try { getLocalPlayer().method("RPC_AwardKill").invoke() } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Award kill yourself."
      }),
      new ButtonInfo({
        buttonText: "RPC Set Kills +10",
        method: () => {
          try {
            var p = getLocalPlayer()
            var kills = p.method("get_kills").invoke()
            p.method("set_kills").invoke(kills + 10)
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Add 10 to your kills."
      }),
      new ButtonInfo({
        buttonText: "RPC Set Deaths 0",
        method: () => {
          try { getLocalPlayer().method("set_deaths").invoke(0) } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Reset your deaths to 0."
      })
    ],
    // Category 10: Item Mods
    [
      new ButtonInfo({
        buttonText: "Dupe Held Item",
        method: () => {
          try {
            var localPlayer = getLocalPlayer()
            if (!localPlayer || localPlayer.isNull?.()) return
            var pos = getTransform(localPlayer).method("get_position").invoke()
            if (itemList.length === 0) buildItemList()
            var entry = itemList[Math.floor(Math.random() * itemList.length)]
            if (entry) spawnNetworkPrefab(entry.name, pos, identityQuaternion)
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Spawn a random item at your position."
      }),
      new ButtonInfo({
        buttonText: "Spawn All Crates",
        method: () => {
          try {
            var localPlayer = getLocalPlayer()
            if (!localPlayer || localPlayer.isNull?.()) return
            var myPos = getTransform(localPlayer).method("get_position").invoke()
            try {
              PrefabGen.method("GeneratePrefab").invoke(0, myPos, identityQuaternion, false)
            } catch (_) {}
            for (var i = 0; i < 5; i++) {
              try {
                var offset = [(Math.random() - 0.5) * 4, Math.random() * 2, (Math.random() - 0.5) * 4]
                var pos = Vector3.method("op_Addition").invoke(myPos, offset)
                PrefabGen.method("GeneratePrefab").invoke(0, pos, identityQuaternion, false)
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Spawn 6 crates around you."
      }),
      new ButtonInfo({
        buttonText: "Item Tornado",
        enableMethod: () => { itemTornadoEnabled = true; sendNotification("Item Tornado ON", false) },
        disableMethod: () => { itemTornadoEnabled = false; sendNotification("Item Tornado OFF", false) },
        method: () => {
          if (!itemTornadoEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 200
            if (itemList.length === 0) buildItemList()
            var myPos = getTransform(getLocalPlayer()).method("get_position").invoke()
            for (var i = 0; i < 4; i++) {
              var angle = (Date.now() / 1000) * 3.0 + (i * Math.PI / 2)
              var radius = 2.5 + Math.sin(Date.now() / 500 + i) * 0.5
              var offset = [Math.cos(angle) * radius, 1.5 + Math.sin(Date.now() / 300 + i * 0.7) * 0.8, Math.sin(angle) * radius]
              var pos = Vector3.method("op_Addition").invoke(myPos, offset)
              var entry = itemList[Math.floor(Math.random() * itemList.length)]
              if (entry) spawnNetworkPrefab(entry.name, pos, identityQuaternion)
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Spins items around you in a tornado."
      }),
      new ButtonInfo({
        buttonText: "Lag All Items",
        enableMethod: () => { lagAllItemsEnabled = true; sendNotification("Lag All Items ON", false) },
        disableMethod: () => { lagAllItemsEnabled = false; sendNotification("Lag All Items OFF", false) },
        method: () => {
          if (!lagAllItemsEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 300
            var myPos = getTransform(getLocalPlayer()).method("get_position").invoke()
            var allItems = Object.method("FindObjectsOfType", 0).invoke(0)
            for (var i = 0; i < allItems.length; i++) {
              try {
                var item = allItems[i]
                var t = getTransform(item)
                if (!t || t.isNull?.()) continue
                var pos = t.method("get_position").invoke()
                var dist = Vector3.method("Distance").invoke(myPos, pos)
                if (dist < 30) {
                  item.method("RPC_Teleport").invoke([pos[0] + (Math.random() - 0.5) * 2, pos[1] + (Math.random() - 0.5) * 2, pos[2] + (Math.random() - 0.5) * 2])
                }
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Randomize positions of all nearby items."
      }),
      new ButtonInfo({
        buttonText: "Rainbow All Items",
        enableMethod: () => { rainbowAllItemsEnabled = true; hueVal = 0; sendNotification("Rainbow All Items ON", false) },
        disableMethod: () => { rainbowAllItemsEnabled = false; sendNotification("Rainbow All Items OFF", false) },
        method: () => {
          if (!rainbowAllItemsEnabled) return
          try {
            hueVal = (hueVal + 3) % 127
            var allItems = Object.method("FindObjectsOfType", 0).invoke(0)
            for (var i = 0; i < allItems.length; i++) {
              try {
                var item = allItems[i]
                var grabbable = item.method("GetComponent", 0).inflate(0)
                if (grabbable && !grabbable.isNull?.()) {
                  try { grabbable.method("set_colorHue").invoke((hueVal + i * 5) % 127) } catch (_) {}
                  try { grabbable.method("set_colorSaturation").invoke(127) } catch (_) {}
                }
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Rainbow all items in the world."
      }),
      new ButtonInfo({
        buttonText: "Held Inf Sell Value",
        method: () => {
          try {
            var grabbable = getLocalHeldGrabbable(true)
            if (!grabbable || grabbable.isNull?.()) { sendNotification("No held item", false); return }
            var gbi = null
            try { gbi = grabbable.method("GetComponentInChildren", 1).inflate(GBIClass).invoke(true) } catch (_) { gbi = null }
            if (!gbi || gbi.isNull?.()) {
              try { gbi = grabbable.method("GetComponent", 1).inflate(GBIClass).invoke() } catch (_) { gbi = null }
            }
            if (!gbi || gbi.isNull?.()) { sendNotification("Held item has no GrabbableItem", false); return }
            try { gbi.method("SetAdditionalSellValue").invoke(9999999) } catch (_) {}
            try { gbi.method("set_sellValue").invoke(9999999) } catch (_) {}
            tryCallNames(gbi, ["set_sellValue", "SetSellValue", "SetAdditionalSellValue"], 1, 9999999)
            var finalSell = gbi.method("get_sellValue").invoke()
            sendNotification("Sell value set to " + finalSell, false)
          } catch (e) { sendNotification("Failed: " + e, false) }
        },
        isTogglable: false,
        toolTip: "Set held item sell value to max."
      }),
      new ButtonInfo({
        buttonText: "Rainbow Held Item",
        enableMethod: () => { rainbowHeldItemEnabled = true; hueVal = 0; sendNotification("Rainbow Held ON", false) },
        disableMethod: () => { rainbowHeldItemEnabled = false; sendNotification("Rainbow Held OFF", false) },
        method: () => {
          if (!rainbowHeldItemEnabled) return
          try {
            hueVal = (hueVal + 3) % 127
            var grabbable = getLocalHeldGrabbable(true)
            if (!grabbable || grabbable.isNull?.()) return
            var gbi = null
            try { gbi = grabbable.method("GetComponentInChildren", 1).inflate(GBIClass).invoke(true) } catch (_) { gbi = null }
            if (!gbi || gbi.isNull?.()) {
              try { gbi = grabbable.method("GetComponent", 1).inflate(GBIClass).invoke() } catch (_) { gbi = null }
            }
            if (!gbi || gbi.isNull?.()) return
            try { gbi.method("set_colorHue").invoke(hueVal) } catch (_) {}
            try { gbi.method("set_colorSaturation").invoke(127) } catch (_) {}
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Cycle rainbow on held item."
      }),
      new ButtonInfo({
        buttonText: "Cage All Players",
        enableMethod: () => { cageAllEnabled = true; sendNotification("Cage All ON", false) },
        disableMethod: () => { cageAllEnabled = false; sendNotification("Cage All OFF", false) },
        method: () => {
          if (!cageAllEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 1000
            var players = getAllNetPlayersList(false)
            for (var i = 0; i < players.length; i++) {
              try {
                var pos = getTransform(players[i]).method("get_position").invoke()
                var offsets = [[1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1], [0, 1.5, 0]]
                for (var j = 0; j < offsets.length; j++) {
                  var cagePos = Vector3.method("op_Addition").invoke(pos, offsets[j])
                  spawnNetworkPrefab("item_metal_plate", cagePos, identityQuaternion)
                }
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Cage all players with metal plates."
      }),
      new ButtonInfo({
        buttonText: "Sell All Items",
        method: () => {
          try {
            sendNotification("Selling all items...", false)
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Attempt to sell all items."
      })
    ],
    // Category 11: Mob Mods
    [
      new ButtonInfo({
        buttonText: "Kill All Mobs",
        method: () => {
          try {
            var mobNames = Object.keys(acMobIdByName).filter(function(n) { return !n.endsWith("Controller") })
            for (var i = 0; i < mobNames.length; i++) {
              try {
                var mobClass = AssemblyCSharp.class("AnimalCompany." + mobNames[i] + "Controller")
                if (!mobClass) continue
                var instances = Object.method("FindObjectsOfType", 0).inflate(mobClass).invoke()
                for (var j = 0; j < instances.length; j++) {
                  try { instances[j].method("RPC_KillMob").invoke() } catch (_) {}
                  try { instances[j].method("KillMob").invoke() } catch (_) {}
                  try { instances[j].method("Die").invoke() } catch (_) {}
                }
              } catch (_) {}
            }
            sendNotification("Killed all mobs!", false)
          } catch (e) { console.error("[KillAllMobs]", e) }
        },
        isTogglable: false,
        toolTip: "Kill all mobs in the scene."
      }),
      new ButtonInfo({
        buttonText: "Explode All Mobs",
        method: () => {
          try {
            var mobNames = Object.keys(acMobIdByName).filter(function(n) { return !n.endsWith("Controller") })
            for (var i = 0; i < mobNames.length; i++) {
              try {
                var mobClass = AssemblyCSharp.class("AnimalCompany." + mobNames[i] + "Controller")
                if (!mobClass) continue
                var instances = Object.method("FindObjectsOfType", 0).inflate(mobClass).invoke()
                for (var j = 0; j < instances.length; j++) {
                  try {
                    var pos = getTransform(instances[j]).method("get_position").invoke()
                    spawnNetworkPrefab("RPGRocket", pos, identityQuaternion)
                    instances[j].method("Die").invoke()
                  } catch (_) {}
                }
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Explode and kill all mobs."
      }),
      new ButtonInfo({
        buttonText: "Mob Kill Loop",
        enableMethod: () => { mobKillLoopEnabled = true; sendNotification("Mob Kill Loop ON", false) },
        disableMethod: () => { mobKillLoopEnabled = false; sendNotification("Mob Kill Loop OFF", false) },
        method: () => {
          if (!mobKillLoopEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 1500
            var mobNames = Object.keys(acMobIdByName).filter(function(n) { return !n.endsWith("Controller") })
            for (var i = 0; i < mobNames.length; i++) {
              try {
                var mobClass = AssemblyCSharp.class("AnimalCompany." + mobNames[i] + "Controller")
                if (!mobClass) continue
                var instances = Object.method("FindObjectsOfType", 0).inflate(mobClass).invoke()
                for (var j = 0; j < instances.length; j++) {
                  try { instances[j].method("Die").invoke() } catch (_) {}
                }
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Continuously kill all mobs."
      }),
      new ButtonInfo({
        buttonText: "Mob TP To Me",
        method: () => {
          try {
            var myPos = getTransform(getLocalPlayer()).method("get_position").invoke()
            var mobNames = Object.keys(acMobIdByName).filter(function(n) { return !n.endsWith("Controller") })
            for (var i = 0; i < mobNames.length; i++) {
              try {
                var mobClass = AssemblyCSharp.class("AnimalCompany." + mobNames[i] + "Controller")
                if (!mobClass) continue
                var instances = Object.method("FindObjectsOfType", 0).inflate(mobClass).invoke()
                for (var j = 0; j < instances.length; j++) {
                  try { getTransform(instances[j]).method("set_position").invoke(myPos) } catch (_) {}
                }
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Teleport all mobs to you."
      }),
      new ButtonInfo({
        buttonText: "Mob Scale Big",
        method: () => {
          try {
            var mobNames = Object.keys(acMobIdByName).filter(function(n) { return !n.endsWith("Controller") })
            for (var i = 0; i < mobNames.length; i++) {
              try {
                var mobClass = AssemblyCSharp.class("AnimalCompany." + mobNames[i] + "Controller")
                if (!mobClass) continue
                var instances = Object.method("FindObjectsOfType", 0).inflate(mobClass).invoke()
                for (var j = 0; j < instances.length; j++) {
                  try { getTransform(instances[j]).method("set_localScale").invoke([5, 5, 5]) } catch (_) {}
                }
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Make all mobs giant."
      }),
      new ButtonInfo({
        buttonText: "Mob Scale Tiny",
        method: () => {
          try {
            var mobNames = Object.keys(acMobIdByName).filter(function(n) { return !n.endsWith("Controller") })
            for (var i = 0; i < mobNames.length; i++) {
              try {
                var mobClass = AssemblyCSharp.class("AnimalCompany." + mobNames[i] + "Controller")
                if (!mobClass) continue
                var instances = Object.method("FindObjectsOfType", 0).inflate(mobClass).invoke()
                for (var j = 0; j < instances.length; j++) {
                  try { getTransform(instances[j]).method("set_localScale").invoke([0.1, 0.1, 0.1]) } catch (_) {}
                }
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Make all mobs tiny."
      }),
      new ButtonInfo({
        buttonText: "Mob Freeze",
        enableMethod: () => { mobFreezeEnabled = true; sendNotification("Mob Freeze ON", false) },
        disableMethod: () => { mobFreezeEnabled = false; sendNotification("Mob Freeze OFF", false) },
        method: () => {
          if (!mobFreezeEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 500
            var mobNames = Object.keys(acMobIdByName).filter(function(n) { return !n.endsWith("Controller") })
            for (var i = 0; i < mobNames.length; i++) {
              try {
                var mobClass = AssemblyCSharp.class("AnimalCompany." + mobNames[i] + "Controller")
                if (!mobClass) continue
                var instances = Object.method("FindObjectsOfType", 0).inflate(mobClass).invoke()
                for (var j = 0; j < instances.length; j++) {
                  try { instances[j].method("set_isStunned").invoke(true) } catch (_) {}
                  try {
                    var rb = instances[j].method("GetComponentInChildren", 0).inflate(Rigidbody).invoke()
                    if (rb && !rb.isNull()) rb.method("set_isKinematic").invoke(true)
                  } catch (_) {}
                }
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Freeze all mobs in place."
      }),
      new ButtonInfo({
        buttonText: "Mob Bounce All",
        method: () => {
          try {
            var mobNames = Object.keys(acMobIdByName).filter(function(n) { return !n.endsWith("Controller") })
            for (var i = 0; i < mobNames.length; i++) {
              try {
                var mobClass = AssemblyCSharp.class("AnimalCompany." + mobNames[i] + "Controller")
                if (!mobClass) continue
                var instances = Object.method("FindObjectsOfType", 0).inflate(mobClass).invoke()
                for (var j = 0; j < instances.length; j++) {
                  try {
                    var rb = instances[j].method("GetComponentInChildren", 0).inflate(Rigidbody).invoke()
                    if (rb && !rb.isNull()) {
                      rb.method("set_isKinematic").invoke(false)
                      rb.method("AddForce").invoke([(Math.random() - 0.5) * 1000, 1200, (Math.random() - 0.5) * 1000])
                    }
                  } catch (_) {}
                }
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: false,
        toolTip: "Launch all mobs into the air."
      }),
      new ButtonInfo({
        buttonText: "Mob Bounce Loop",
        enableMethod: () => { mobBounceLoopEnabled = true; sendNotification("Mob Bounce Loop ON", false) },
        disableMethod: () => { mobBounceLoopEnabled = false; sendNotification("Mob Bounce Loop OFF", false) },
        method: () => {
          if (!mobBounceLoopEnabled) return
          try {
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 800
            var mobNames = Object.keys(acMobIdByName).filter(function(n) { return !n.endsWith("Controller") })
            for (var i = 0; i < mobNames.length; i++) {
              try {
                var mobClass = AssemblyCSharp.class("AnimalCompany." + mobNames[i] + "Controller")
                if (!mobClass) continue
                var instances = Object.method("FindObjectsOfType", 0).inflate(mobClass).invoke()
                for (var j = 0; j < instances.length; j++) {
                  try {
                    var rb = instances[j].method("GetComponentInChildren", 0).inflate(Rigidbody).invoke()
                    if (rb && !rb.isNull()) {
                      rb.method("set_isKinematic").invoke(false)
                      rb.method("AddForce").invoke([(Math.random() - 0.5) * 1000, 1200, (Math.random() - 0.5) * 1000])
                    }
                  } catch (_) {}
                }
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Continuously bounce all mobs."
      }),
      new ButtonInfo({
        buttonText: "Force Mobs Stay",
        enableMethod: () => { forceSpawnedMobsStayEnabled = true; sendNotification("Force Mobs Stay ON", false) },
        disableMethod: () => { forceSpawnedMobsStayEnabled = false; sendNotification("Force Mobs Stay OFF", false) },
        isTogglable: true,
        toolTip: "Keep spawned mobs active."
      })
    ],
    // Category 12: Extra Guns
    [
      new ButtonInfo({
        buttonText: "Fling Gun",
        enableMethod: () => { sendNotification("Fling Gun ON", false) },
        disableMethod: () => { sendNotification("Fling Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 300
            var target = getGunModTarget()
            if (target && !target.isNull?.()) {
              target.method("RPC_AddForce").invoke([0, 20, 0])
            }
          } catch (e) { console.error("[FlingGun]", e) }
        },
        isTogglable: true,
        toolTip: "Fling aimed player upward."
      }),
      new ButtonInfo({
        buttonText: "Void Gun",
        enableMethod: () => { sendNotification("Void Gun ON", false) },
        disableMethod: () => { sendNotification("Void Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 350
            var target = getGunModTarget()
            if (target && !target.isNull?.()) {
              target.method("RPC_Teleport").invoke([0, -99999, 0])
            }
          } catch (e) { console.error("[VoidGun]", e) }
        },
        isTogglable: true,
        toolTip: "Send aimed player to the void."
      }),
      new ButtonInfo({
        buttonText: "Pull Gun",
        enableMethod: () => { sendNotification("Pull Gun ON", false) },
        disableMethod: () => { sendNotification("Pull Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 200
            var target = getGunModTarget()
            if (target && !target.isNull?.()) {
              var myPos = getTransform(getLocalPlayer()).method("get_position").invoke()
              var targetPos = getTransform(target).method("get_position").invoke()
              var dir = Vector3.method("Normalize").invoke(Vector3.method("op_Subtraction").invoke(myPos, targetPos))
              target.method("RPC_AddForce").invoke(Vector3.method("op_Multiply").invoke(dir, 8))
            }
          } catch (e) { console.error("[PullGun]", e) }
        },
        isTogglable: true,
        toolTip: "Pull aimed player towards you."
      }),
      new ButtonInfo({
        buttonText: "Explode Gun",
        enableMethod: () => { sendNotification("Explode Gun ON", false) },
        disableMethod: () => { sendNotification("Explode Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 350
            var aimPoint = getGunModAimPoint()
            spawnNetworkPrefab("item_dynamite", aimPoint, identityQuaternion)
            spawnNetworkPrefab("item_grenade", aimPoint, identityQuaternion)
          } catch (e) { console.error("[ExplodeGun]", e) }
        },
        isTogglable: true,
        toolTip: "Spawn explosives at aim point."
      }),
      new ButtonInfo({
        buttonText: "Landmine Gun",
        enableMethod: () => { sendNotification("Landmine Gun ON", false) },
        disableMethod: () => { sendNotification("Landmine Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 400
            var aimPoint = getGunModAimPoint()
            spawnNetworkPrefab("item_landmine", aimPoint, identityQuaternion)
          } catch (e) { console.error("[LandmineGun]", e) }
        },
        isTogglable: true,
        toolTip: "Spawn landmines at aim point."
      }),
      new ButtonInfo({
        buttonText: "Float Gun",
        enableMethod: () => { sendNotification("Float Gun ON", false) },
        disableMethod: () => { sendNotification("Float Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 300
            var target = getGunModTarget()
            if (target && !target.isNull?.()) {
              var pos = readVec3Components(getTransform(target).method("get_position").invoke())
              spawnNetworkPrefab("item_balloon", [pos[0], pos[1] + 0.5, pos[2]], identityQuaternion)
              target.method("RPC_AddForce").invoke([0, 8, 0])
            }
          } catch (e) { console.error("[FloatGun]", e) }
        },
        isTogglable: true,
        toolTip: "Float aimed player with balloons."
      }),
      new ButtonInfo({
        buttonText: "Squeaky Voice Gun",
        enableMethod: () => { sendNotification("Squeaky Voice Gun ON", false) },
        disableMethod: () => { sendNotification("Squeaky Voice Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 500
            var target = getGunModTarget()
            if (target && !target.isNull?.()) {
              target.method("RPC_SetSqueakyVoiceEnabled").invoke(true)
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Make aimed player squeaky."
      }),
      new ButtonInfo({
        buttonText: "Stink Gun",
        enableMethod: () => { sendNotification("Stink Gun ON", false) },
        disableMethod: () => { sendNotification("Stink Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 350
            var target = getGunModTarget()
            if (target && !target.isNull?.()) {
              target.method("RPC_TagAsStinky").invoke()
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Make aimed player stinky."
      }),
      new ButtonInfo({
        buttonText: "Trap Gun",
        enableMethod: () => { sendNotification("Trap Gun ON", false) },
        disableMethod: () => { sendNotification("Trap Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 500
            var target = getGunModTarget()
            if (target && !target.isNull?.()) {
              var pos = readVec3Components(getTransform(target).method("get_position").invoke())
              spawnNetworkPrefab("item_steel_beam", pos, identityQuaternion)
              spawnNetworkPrefab("item_steel_beam", [pos[0] + 0.5, pos[1], pos[2]], identityQuaternion)
              spawnNetworkPrefab("item_steel_beam", [pos[0] - 0.5, pos[1], pos[2]], identityQuaternion)
              spawnNetworkPrefab("item_steel_beam", [pos[0], pos[1], pos[2] + 0.5], identityQuaternion)
              spawnNetworkPrefab("item_steel_beam", [pos[0], pos[1], pos[2] - 0.5], identityQuaternion)
              spawnNetworkPrefab("item_metal_plate", [pos[0], pos[1] + 1, pos[2]], identityQuaternion)
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Trap aimed player with steel beams."
      }),
      new ButtonInfo({
        buttonText: "Rocket Launcher",
        enableMethod: () => { rocketHandsEnabled = true; sendNotification("Rocket Launcher ON", false) },
        disableMethod: () => { rocketHandsEnabled = false; sendNotification("Rocket Launcher OFF", false) },
        method: () => {
          if (!rocketHandsEnabled) return
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 200
            var handTf = getTransform(righthand ? rightHandTransform : leftHandTransform)
            var handPos = handTf.method("get_position").invoke()
            var fwd = handTf.method("get_forward").invoke()
            var spawnPos = Vector3.method("op_Addition").invoke(handPos, Vector3.method("op_Multiply").invoke(fwd, 0.5))
            spawnNetworkPrefab("RPGRocket", spawnPos, identityQuaternion)
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Shoot rockets from hand."
      }),
      new ButtonInfo({
        buttonText: "Goop Shower Gun",
        enableMethod: () => { sendNotification("Goop Shower Gun ON", false) },
        disableMethod: () => { sendNotification("Goop Shower Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 80
            var aimPoint = getGunModAimPoint()
            var spawnPos = [aimPoint[0] + (Math.random() - 0.5) * 2, aimPoint[1] + 5, aimPoint[2] + (Math.random() - 0.5) * 2]
            spawnNetworkPrefab("item_goop", spawnPos, identityQuaternion)
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Rain goop from above aim point."
      }),
      new ButtonInfo({
        buttonText: "Bring All Items Gun",
        enableMethod: () => { sendNotification("Bring All Items Gun ON", false) },
        disableMethod: () => { sendNotification("Bring All Items Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 500
            var aimPoint = getGunModAimPoint()
            var allItems = Object.method("FindObjectsOfType", 0).invoke(0)
            var count = 0
            for (var i = 0; i < allItems.length && count < 5; i++) {
              try {
                var item = allItems[i]
                var t = getTransform(item)
                if (!t || t.isNull?.()) continue
                item.method("RPC_Teleport").invoke(Vector3.method("op_Addition").invoke(aimPoint, [count * 0.5, 0, 0]))
                count++
              } catch (_) {}
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Bring nearby items to gun aim point."
      }),
      new ButtonInfo({
        buttonText: "Disintegrate Gun",
        enableMethod: () => { sendNotification("Disintegrate Gun ON", false) },
        disableMethod: () => { sendNotification("Disintegrate Gun OFF", false) },
        method: () => {
          try {
            var gripping = righthand ? (leftGrab && leftTrigger) : (rightGrab && rightTrigger)
            if (!gripping) return
            if (Date.now() < gunDelay) return
            gunDelay = Date.now() + 500
            var target = getGunModTarget()
            if (target && !target.isNull?.()) {
              var pos = getTransform(target).method("get_position").invoke()
              var vfxIds = [0, 32, 33, 38, 44, 128, 130, 183]
              for (var v = 0; v < vfxIds.length; v++) {
                try { target.method("RPC_PlayVFX").invoke(vfxIds[v], pos) } catch (_) {}
              }
              target.method("RPC_Teleport").invoke([0, -99999, 0])
              target.method("RPC_PlayerHit").invoke(9999, pos, AssemblyCSharp.class("AnimalCompany.DamageSourceInfo").method("get_Null").invoke())
            }
          } catch (_) {}
        },
        isTogglable: true,
        toolTip: "Full disintegrate: VFX + void + kill."
      })
    ]
  ]

  // Category 13: Nametags
  buttons[13] = [
    new ButtonInfo({
      buttonText: "Toggle Nametags",
      enableMethod: () => {
        nametagEnabled = true
        fetchNametagRoles()
        sendNotification("Nametags ON — roles loaded", false)
      },
      disableMethod: () => {
        nametagEnabled = false
        destroyAllNametags()
        sendNotification("Nametags OFF", false)
      },
      isTogglable: true,
      toolTip: "Show nametags above players."
    }),
    new ButtonInfo({
      buttonText: "Refresh Roles",
      method: () => {
        nametagLastFetch = 0
        fetchNametagRoles()
        sendNotification("Roles refreshed! (" + Object.keys(nametagRoles).length + " entries)", false)
      },
      isTogglable: false,
      toolTip: "Force reload roles from server."
    }),
    new ButtonInfo({
      buttonText: "My Role",
      method: () => {
        try {
          var localPlayer = getLocalPlayer()
          if (!localPlayer || localPlayer.isNull?.()) return
          var myName = getPlayerName(localPlayer)
          if (!myName) return sendNotification("Could not get name", false)
          var roleData = nametagRoles[myName.toLowerCase()]
          if (roleData) {
            sendNotification(myName + " → " + roleData.role + " (" + roleData.displayName + ")", false, 5)
          } else {
            sendNotification(myName + " → Synapse Menu (no special role)", false, 5)
          }
        } catch (e) { sendNotification("Error: " + e, false) }
      },
      isTogglable: false,
      toolTip: "Check your current role."
    }),
    new ButtonInfo({
      buttonText: "Clear My Nametag",
      method: () => {
        try {
          var localPlayer = getLocalPlayer()
          if (!localPlayer || localPlayer.isNull?.()) return
          var myName = getPlayerName(localPlayer)
          if (myName && nametagObjects[myName.toLowerCase()]) {
            Destroy(nametagObjects[myName.toLowerCase()].root)
            delete nametagObjects[myName.toLowerCase()]
            sendNotification("Cleared your nametag", false)
          }
        } catch (_) {}
      },
      isTogglable: false,
      toolTip: "Remove nametag above your own head."
    }),
    new ButtonInfo({
      buttonText: "List Roles",
      method: () => {
        var keys = Object.keys(nametagRoles)
        if (keys.length === 0) {
          sendNotification("No roles loaded. Tap Refresh Roles.", false)
          return
        }
        for (var i = 0; i < keys.length; i++) {
          var rd = nametagRoles[keys[i]]
          sendNotification(rd.displayName + " → " + rd.role, false, 3)
        }
      },
      isTogglable: false,
      toolTip: "List all assigned roles."
    }),
    new ButtonInfo({
      buttonText: "API URL",
      method: () => { sendNotification("API: " + NAMETAG_API, false, 5) },
      isTogglable: false,
      toolTip: "Show current API endpoint."
    })
  ]

  // --- Search Keyboard & Results ---
  buttons[44] = [
    new ButtonInfo({ buttonText: "Exit Search", method: () => { currentCategory = 0; currentPage = 0; searchQuery = "" }, isTogglable: false, toolTip: "Exit search." }),
    new ButtonInfo({ buttonText: "Backspace", method: () => { if (searchQuery.length > 0) { searchQuery = searchQuery.slice(0, -1); reloadMenu() } }, isTogglable: false }),
    new ButtonInfo({ buttonText: "Clear", method: () => { searchQuery = ""; reloadMenu() }, isTogglable: false }),
    new ButtonInfo({ buttonText: "Space", method: () => { searchQuery += " "; reloadMenu() }, isTogglable: false }),
    new ButtonInfo({ buttonText: "Search", method: () => { currentCategory = 45; currentPage = 0; reloadMenu() }, isTogglable: false, toolTip: "Execute search." }),
    ...("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")).map(function(letter) {
      return new ButtonInfo({
        buttonText: letter,
        method: () => { searchQuery += letter.toLowerCase(); reloadMenu() },
        isTogglable: false
      })
    })
  ]

  // --- Auto GunLib ---
let autoGunLibActive = false
let gunLibEnabled = false
let gunModsCategory = 5

  let buttonMap = new Map()
  function rebuildButtonMap() {
    buttonMap = new Map()
    buttons.flat().forEach(button => {
      buttonMap.set(button.buttonText, button)
    })
  }
  rebuildButtonMap()
  buildMobList()
  buildItemList()
  buildVFXList()

  function getIndex(buttonText) {
    let button = buttonMap.get(buttonText)
    if (!button) {
      rebuildButtonMap()
      button = buttonMap.get(buttonText)
    }
    return button
  }

  // --- OnTriggerEnter Hook (Buttons Touch Detection) ---
  if (!GorillaReportButton)
    throw new Error(
      "[init] ComputerTerminalKey class not found — menu buttons will not work."
    )
  const ButtonActivation = GorillaReportButton.method("OnTriggerEnter")
  ButtonActivation.implementation = function(collider) {
    const rawName = this.method("get_name")
      .invoke()
      .toString()
    if (rawName.length > 1 && rawName[1] == "@") {
      if (collider && collider.handle && referenceCollider && referenceCollider.handle && collider.handle.equals(referenceCollider.handle)) {
        const goName = rawName.substring(2, rawName.length - 1)
        const _time = Time.method("get_time").invoke()
        if (_time > buttonClickDelay) {
          buttonClickDelay = _time + 0.2
          const button = getIndex(goName)
          if (button) {
            if (button.isTogglable) {
              button.enabled = !button.enabled
              reloadMenu()
              if (button.enabled) {
                if (button.toolTip)
                  sendNotification("[ENABLE] " + button.toolTip, false)
                try {
                  button.enableMethod?.()
                } catch (e) {
                  button.enabled = false
                  console.error(`[Toggle Enable] ${button.buttonText}:`, e)
                }
              } else {
                if (button.toolTip)
                  sendNotification("[DISABLE] " + button.toolTip, false)
                try {
                  button.disableMethod?.()
                } catch (e) {
                  console.error(`[Toggle Disable] ${button.buttonText}:`, e)
                }
              }
            } else {
              try {
                button.method?.()
              } catch (e) {
                console.error(`[Button] ${button.buttonText}:`, e)
              }
              reloadMenu()
              if (button.toolTip) sendNotification(button.toolTip, false)
            }
          }
        }
      }
      return
    }
    return this.method("OnTriggerEnter").invoke(collider)
  }

  // --- LateUpdate Hook (Menu loop updates) ---
  let LateUpdate = null
  const updateHookCandidates = [
    {
      klass: PCClass,
      label: "PlayerController",
      names: ["LateUpdate", "Update"]
    },
    {
      klass: GTPlayerClass,
      label: "GorillaLocomotion",
      names: ["LateUpdate", "Update"]
    },
    { klass: NetPlayer, label: "NetPlayer", names: ["LateUpdate", "Update"] }
  ]
  for (const candidate of updateHookCandidates) {
    for (const name of candidate.names) {
      try {
        LateUpdate = candidate.klass.method(name)
        break
      } catch (_) {}
    }
    if (LateUpdate) break
  }
  if (!LateUpdate) {
    console.error("[hook] No update method found, menu will not tick.")
  }

  if (LateUpdate) {
    LateUpdate.implementation = function() {
      try {
        if (!refreshRuntimeRefs()) {
          return LateUpdate.invoke()
        }
        deltaTime = Time.method("get_deltaTime").invoke()
        time = Time.method("get_time").invoke()
        menuAnimTime += deltaTime

        updateInput()

        // Open/Close menu via secondary buttons
        if ((righthand && rightSecondary) || (!righthand && leftSecondary)) {
          if (currentNotification != "" && time > notifactionResetTime)
            reloadMenu()
          if (menu == null) renderMenu()
          else recenterMenu()
        } else {
          if (menu != null) {
            Destroy(menu)
            menu = null
          }
        }

        if (menu == null) {
          if (reference != null) {
            Destroy(reference)
            reference = null
          }
        } else {
          if (reference == null) renderReference()
        }

        // Auto GunLib: enable when any Gun Mod (cat 5) is active
        try {
          var anyGunModActive = false
          if (buttons[5]) {
            for (var gi = 0; gi < buttons[5].length; gi++) {
              if (buttons[5][gi].enabled) { anyGunModActive = true; break }
            }
          }
          if (anyGunModActive && !autoGunLibActive) {
            autoGunLibActive = true
            if (!gunLibEnabled) {
              gunLibEnabled = true
              createGunLib()
              sendNotification("GunLib auto-enabled", false)
            }
          } else if (!anyGunModActive && autoGunLibActive) {
            autoGunLibActive = false
          }
          if (gunLibEnabled) {
            updateGunLib()
          }
        } catch (e) { console.error("[AutoGunLib]", e) }

        // Call continuous updates for enabled toggle mods
        buttons
          .flat()
          .filter(b => b.enabled)
          .forEach(b => {
            if (b.method) {
              try {
                b.method()
              } catch (e) {
                console.error(`[Mod Tick Error] ${b.buttonText}:`, e)
              }
            }
          })

        // RPC Chaos Loop tick
        try { if (rpcChaosEnabled) rpcChaosLoop() } catch(_) {}

        // Spam SFX tick
        try { if (spamSfxEnabled && (rightGrab || leftGrab)) spamSFXNetwork() } catch(_) {}

        // Nametag update
        try {
          if (nametagEnabled) {
            fetchNametagRoles()
            updateNametagPositions()
          }
        } catch (e) { console.error("[Nametag Tick]", e) }

        prevLeftGrab = leftGrab
        prevRightGrab = rightGrab

        updateBackPanel()

        return LateUpdate.invoke()
      } catch (e) {
        try {
          return LateUpdate.invoke()
        } catch (_) {}
      }
    }
  }

  const logoAscii = [
    '                                                                                 ', 
 ' ▄▄▄▄▄                                          ▄▄▄     ▄▄▄                   ',
 '██▀▀▀▀█▄                                         ███▄ ▄███                    ',
 '▀██▄  ▄▀       ▄                                 ██ ▀█▀ ██         ▄          ',
  ' ▀██▄▄  ██ ██ ████▄ ▄▀▀█▄ ████▄ ▄██▀█ ▄█▀█▄     ██     ██   ▄█▀█▄ ████▄ ██ ██  ',
 '▄   ▀██▄ ██▄██ ██ ██ ▄█▀██ ██ ██ ▀███▄ ██▄█▀     ██     ██   ██▄█▀ ██ ██ ██ ██ ',
 '▀██████▀▄▄▀██▀▄██ ▀█▄▀█▄██▄████▀█▄▄██▀▄▀█▄▄▄   ▀██▀     ▀██▄▄▀█▄▄▄▄██ ▀█▄▀██▀█ ',
 '           ██              ██                                                ', 
  '        ▀▀▀               ▀                                                  ',
  ].join('\n')

  console.log("===========================================")
  console.log(logoAscii)
  console.log("===========================================")
})
