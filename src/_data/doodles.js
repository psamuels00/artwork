let categories = [
  {
    name: 'Abstract',
    images: [
      'DesertSculptureOutskirtsOfTown.jpg',
      'Vortex.jpg',
      'AlienConfrontation.jpg',
      'DizzyingSwirl.jpg',
      'AbstractDotsAndLines.jpg',
      'ColorfulAbstractShapes.jpg',
      'ColorfulAbstractShapesTitle.jpg',
      'SignedCaveDrawing.jpg',
    ],
  },
  {
    name: 'Animals',
    images: [
      'Jellyfish.jpg',
      'EmmaSitting.jpg',
      'TurkeyWithInflamedComb.jpg',
      'EmmaSlightWorriedLook.jpg',
      'IrinioDove.jpg',
      'SSnake.jpg',
      'RainbowBirdWithHeart.jpg',
    ],
  },
  {
    name: 'Faces',
    images: [
      'SereneCaveman.jpg',
      'KevinBurgess.jpg',
      'PainterlyGeorgeTerrifiedLook.jpg',
      'EntrancedManWithTinyHat.jpg',
      'FlatFaceCloseup.jpg',
      'GeorgeCumSusanBoyle.jpg',
      'LongNeckedMan.jpg',
      'MeAt5WildHairTinyBody.jpg',
      'ScreamingManFaceWithBody.jpg',
      'SketchyDudeProfileHugePuckeredLips.jpg',
      'CasperMustache.jpg',
      'HairbunSketch.jpg',
      'GeorgeFaceWithBanana.jpg',
      'GeorgeFaceOutlineFromTheDemo.jpg',
      'GeorgeFaceLookAskance.jpg',
      'ColorPatchFace.jpg',
      'SashidirFace.jpg',
      'SketchyFace.jpg',
    ],
  },
  {
    name: 'Flowers',
    images: [
      'BoldRedFlower.jpg',
      'TwoFlowersWithStem.jpg',
      'HeartsAndFlowers.jpg',
      'RainbowDaisy.jpg',
      'FlowerDoodleDuneDude.jpg',
      'FlowerDoodleWithButterfly.jpg',
      'FlowerDoodleWithGrass.jpg',
      'InsideOutFlowerWithPot.jpg',
      'RedFlower.jpg',
      'SunflowerInPot.jpg',
      'WireframeFlowersInClayPot.jpg',
    ],
  },
  {
    name: 'Outdoors',
    images: [
      'DesertMountainTree.jpg',
      'BigCrescentMoonNightScene.jpg',
      'PeaField.jpg',
      'TreeFrame.jpg',
      'BarnFieldsMountains.jpg',
      'TreeAndTunnel.jpg',

      'SkyViewThroughTreesAbove.jpg',
      'TreeWithActiveLeaves.jpg',
      'OceanHorizonCloudsBirds.jpg',
      'PalmAtBeach.jpg',
      'BeachSceneBoatOnHorizon.jpg',
      'CoconutTreeOnBeach.jpg',
      'ChildDrawingTreeAndFlowers.jpg',
      'MinimalistBeachSceneHorizonClouds.jpg',
      'MinimalistBeachScene.jpg',
      'BackYardSketch.jpg',

      'CreatureInHotAirBalloon.jpg',
      'DolphinJumpingInSun.jpg',
      'VeryTallPalmTreeAtBeach.jpg',
    ],
  },
  {
    name: 'People',
    images: [
      'GeorgeMiniTheDemoSharpOutline.jpg',
      'WomanBigHairWithBird.jpg',
      'BodyHoldingHead.jpg',
      'CottonCandyLady.jpg',
      'StatueWithScarf.jpg',
      'StickFigureRidingRug.jpg',
      'DreadlockWormHair.jpg',
    ],
  },
  {
    name: 'Stills',
    images: [
      'AppleStillShotSimple.jpg',
      'MiniVersionOfTheOnion.jpg',
    ],
  },
  {
    name: 'Textures',
    images: [
      'ProtozoanTexture.jpg',
      'GreenWaveTexture.jpg',
      'SpiralWithLeavesTexture.jpg',
      'BlackWireWithBlueTexture.jpg',
      'WaveMirrorTexture.jpg',
      'SwabTipTexture.jpg',
      'BlueOnGreenTexture.jpg',
      'BristlyThingTexture.jpg',
      'ChickenLegsEsophagusTexture.jpg',
      'CirclesTexture.jpg',
      'AlgaeTexture.jpg',
      'CurliesTexture.jpg',
      'PeasTexture.jpg',
      'ReticulatedPodTexture.jpg',
      'SunThruBlueGlassTexture.jpg',
    ],
  },
  {
    name: 'Wacky',
    images: [
      'TheHumanMachine.jpg',
      'EarthDance.jpg',
      'Egghead.jpg',
      'WackyStarryNightMobile.jpg',
      'RainbowAmoeba.jpg',
      'AlienShowdownOnTheRoad.jpg',
      'PersonFacingAngryGodhead.jpg',
      'CreatureThing.jpg',
      'PinkAlien.jpg',
      'RescueBaloonBlower.jpg',
    ],
  },
]

// add page title
categories = categories.map(category => {
  return {
    page_title: "Perrin's " + category.name + " Doodles",
    ...category
  };
});

const common = require('./common');

module.exports = {
    structured: common.navigable(categories),
    flat: common.flattened(categories),
};
