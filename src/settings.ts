export const Settings = {
    debug: false,
    collision: true,

    width: 400 * 3,
    height: 192 * 3,

    worldWidth: 400,
    worldHeight: 192,
    tileSize: 16,
    worldTileWidth: 25,
    worldTileHeight: 12,

    playerSpeedX: 100,
    playerSpeedY: 100,
    playerWidth: 15,
    playerHeight: 14,
    playerOx: 3,
    playerOy: 3,
    playerBulletSpeedX: 200,
    playerBulletSpeedY: 100,
    playerBulletsPoolSize: 200,
    playerSprayOpen: 1.2,
    playerBulletWidth: 3,
    playerBulletHeight: 3,
    playerInvincibleTime: 0.8,
    playerBlinkPeriod: 0.1,
    playerAnimationTime: 0.2,
    playerShootF: 1,

    enemyWidth: 13,
    enemyHeight: 16,
    enemyOx: 0,
    enemyOy: 0,
    enemyBulletSpeedX: 50,
    enemyBulletSpeedY: 50,
    enemyBulletsPoolSize: 50,
    enemyShootFrequency: 1.3,
    enemyBulletPoolSize: 1000,
    enemySprayOpen: 1,

    bossWidth: 22,
    bossHeight: 33,
    bossOx: 6,
    bossOy: 3,
    bossSpeed: 75,
    bossBulletSpeedX: 75,
    bossBulletSpeedY: 100,
    bossBulletsPoolSize: 200,
    bossBigBulletWidth: 25,
    bossBigBulletHeight: 25,
    bossBigBulletExplosionTick: 200,
    bossPatternFrequency: 5,
    bossSprayOpen: 2,
    bossLife: 100,

    bulletWidth: 3,
    bulletHeight: 3,
    bulletOx: 1,
    bulletOy: 1,
    bulletMaxHeight: 500,

    bulletsVariance: 20,
    bulletsMaxdY: 200,

    waveEasyCount: 3,
    waveEasyTimeMin: 4,
    waveEasyTimeMax: 6,
    waveEasyAmplitudeMin: 8,
    waveEasyAmplitudeMax: 32,
    waveEasyFrequencyMin: 0.1,
    waveEasyFrequencyMax: 0.25,
    waveEasyRxMin: 2 * 16,
    waveEasyRxMax: 5 * 16,
    waveEasyRyMin: 1 * 16,
    waveEasyRyMax: 3 * 16,
    waveEasySyMin: 16,
    waveEasySyMax: 192 - 32,

    waveMediumCount: 3,
    waveMediumTimeMin: 4,
    waveMediumTimeMax: 6,
    waveMediumAmplitudeMin: 8,
    waveMediumAmplitudeMax: 32,
    waveMediumFrequencyMin: 0.1,
    waveMediumFrequencyMax: 0.25,
    waveMediumRxMin: 2 * 16,
    waveMediumRxMax: 5 * 16,
    waveMediumRyMin: 1 * 16,
    waveMediumRyMax: 3 * 16,
    waveMediumSyMin: 16,
    waveMediumSyMax: 192 - 32,

    waveHardCount: 3,
    waveHardTimeMin: 4,
    waveHardTimeMax: 6,
    waveHardAmplitudeMin: 8,
    waveHardAmplitudeMax: 32,
    waveHardFrequencyMin: 0.1,
    waveHardFrequencyMax: 0.25,
    waveHardRxMin: 2 * 16,
    waveHardRxMax: 5 * 16,
    waveHardRyMin: 1 * 16,
    waveHardRyMax: 3 * 16,
    waveHardSyMin: 0,
    waveHardSyMax: 192 - 32,

    powerUpMaxCount: 5,
    powerUpCost: [0, 10, 15, 25, 50, 100, "👑"],

    backgroundSpeed: 100,
    borderSpeed: 50,

    borderPeakRandMin: 1,
    borderPeakRandMax: 3,
    borderFlatRandMin: 8,
    borderFlatRandMax: 24,

    engineTimeResolution: 1,

    epsilon: 0.1,
    delta: 1 / 1000,
};
