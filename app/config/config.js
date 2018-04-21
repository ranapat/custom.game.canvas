export default class Config {
  static get width() { return 1024; }
  static get height() { return 600; }
  static get enableNativeFrameAnimation() { return true; }
  static get stageTimeoutDelta() { return 1000 / Config.fps; }
  static get fps() { return 60; }
  static get maxFrameSkip() { return 10; }
}
